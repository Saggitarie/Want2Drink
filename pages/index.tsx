import Link from 'next/link';
import Layout from '../components/Layout';
import { ReactElement } from 'react';

const IndexPage = (): ReactElement => (
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
