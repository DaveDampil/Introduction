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
      As a student in computer engineering, I've consistently marveled at the wonders of technology. 
      My interests include engaging in online gaming, playing badminton, and watching movies. 
      I chose to pursue computer engineering with the goal of delving deeper into the realm of technology and expanding my knowledge.
      In the next five years, I envision myself employed in a company, diligently acquiring new skills to remain dedicated to my chosen career path.
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <strong>EXPECTATIONS IN THIS SUBJECT:</strong>
      <ul style={{ listStyleType: 'disc', textAlign: 'left', marginLeft: '2em' }}>
          <li>To gain more knowledge about this subject. </li>
          <li>To gain experience for using next.js. </li>
          <li>To learn on how to create websites using next.js.</li>
        </ul>
      </div>
      </section>
    </Layout>
  );
}
