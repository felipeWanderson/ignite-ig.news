
import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
  <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time>11 de Março de 2022</time>
          <strong>Isso é um titulo</strong>
          <p>Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.</p>  
        </a>
        <a href="#">
          <time>11 de Março de 2022</time>
          <strong>Isso é um titulo</strong>
          <p>Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.</p>  
        </a>
        <a href="#">
          <time>11 de Março de 2022</time>
          <strong>Isso é um titulo</strong>
          <p>Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.</p>  
        </a>
        <a href="#">
          <time>11 de Março de 2022</time>
          <strong>Isso é um titulo</strong>
          <p>Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.</p>  
        </a>
        <a href="#">
          <time>11 de Março de 2022</time>
          <strong>Isso é um titulo</strong>
          <p>Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.</p>  
        </a>
        <a href="#">
          <time>11 de Março de 2022</time>
          <strong>Isso é um titulo</strong>
          <p>Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.</p>  
        </a>
        <a href="#">
          <time>11 de Março de 2022</time>
          <strong>Isso é um titulo</strong>
          <p>Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.Isso é um paragrafo.</p>  
        </a>
      </div>
    </main>
  </>
  );
}