import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { fauna } from "../../services/fauna";
import { query as q } from 'faunadb';
import { stripe } from "../../services/stripe";

type User = {
  ref: {
    id: string;
  }
  data: { 
    stripe_costomer_id: string;
  }
}
export default async (request: NextApiRequest, response: NextApiResponse) => {
  if(request.method === 'POST') {
    const session = await getSession({ req: request });

    const user = await fauna.query<User>(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold(session.user.email),
        )
      )
    );

    let costomerId = user.data.stripe_costomer_id;
    
    if (!costomerId) {
      const stripeCostumer = await stripe.customers.create({
        email: session.user.email,
        // metadata
      });

      await fauna.query(
        q.Update(
          q.Ref(q.Collection('users'), user.ref.id),
          {
            data: {
              stripe_costomer_id: stripeCostumer.id,
            }
          }
        )
      );

      costomerId = stripeCostumer.id;
    }
    

    
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: costomerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        { price: 'price_1IckKYDEqG0pZE7Z0FlRovkJ', quantity: 1 },
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    return response.status(200).json({ sessionId: stripeCheckoutSession.id});
  }else {
    response.setHeader('Allow', 'POST');
    response.status(405).end('Method not allowed');
  }
};