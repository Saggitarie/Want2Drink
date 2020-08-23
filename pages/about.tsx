import Link from 'next/link';
import Layout from '../components/Layout';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a href="/">Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
