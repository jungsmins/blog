import { HeadFC, PageProps, Link } from 'gatsby';
import { Layout } from '../components/Layout';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
