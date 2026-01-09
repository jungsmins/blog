import type { GatsbyNode } from 'gatsby';
import * as path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'posts' });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve('src/templates/PostTemplate.tsx');

  const allMarkdowns = await graphql<{
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            slug: string;
          };
        };
      }>;
    };
  }>(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (allMarkdowns.errors) {
    throw allMarkdowns.errors;
  }

  allMarkdowns.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
