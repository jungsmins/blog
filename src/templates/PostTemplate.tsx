import styled from '@emotion/styled';
import { HeadFC, PageProps, graphql } from 'gatsby';
import { Layout } from '../components/Layout';

interface BlogPostProps extends PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
  };
}

const PostTemplate: React.FC<BlogPostProps> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <Post>
        <PostTitle>{frontmatter.title}</PostTitle>
        <PostDate>{frontmatter.date}</PostDate>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Post>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
      }
      html
    }
  }
`;

export const Head: HeadFC = () => <title>Blog Post - My Blog</title>;

const Post = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const PostTitle = styled.h1`
  margin-top: 0;
  font-size: 2.25rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
`;

const PostDate = styled.p`
  font-size: 0.95rem;
  opacity: 0.7;
  margin-bottom: 0;
`;

const Content = styled.div`
  margin-top: 3rem;
  font-size: 18px;
  line-height: 1.8;
`;

export default PostTemplate;
