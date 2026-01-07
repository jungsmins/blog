import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '../components/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <h1>My Blog</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home - My Blog</title>;
