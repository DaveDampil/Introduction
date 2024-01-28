import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <div style={{ textAlign: 'center' }}>
      My age is 23 and I live in Malolos, Bulacan. 
      My hobbies are: gaming, watching anything, eating, and sleeping.
      I took Computer Engineering because I wanted to design my very own computer.
      I still didn't know what I see myself in 5 years.
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <strong>EXPECTATIONS IN THIS SUBJECT:</strong>
      <ul style={{ listStyleType: 'disc', textAlign: 'left', marginLeft: '2em' }}>
          <li>It is easy. </li>
          <li>Students should be properly guided with their concerns </li>
          <li>Concepts should be concise.</li>
        </ul>
      </div>
      </section>
    </Layout>
  );
}
