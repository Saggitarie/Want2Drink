import Link from 'next/link';
import Layout from '../components/Layout';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js</h1>
    <p>
      <Link href="/about">
        <a href="/about">About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
