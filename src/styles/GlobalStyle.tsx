import { css, Global } from '@emotion/react';

const globalStyles = css`
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    font-size: 16px;

    @media (max-width: 639px) {
      font-size: 14px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.3;
    margin-bottom: 0.5em;
    margin-top: 1em;
    font-weight: 600;
  }

  h1 {
    font-size: 2.5rem;

    @media (max-width: 639px) {
      font-size: 1.875rem;
    }
  }

  h2 {
    font-size: 2rem;

    @media (max-width: 639px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    @media (max-width: 639px) {
      font-size: 1.25rem;
    }
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1.125rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-bottom: 1em;
  }

  a {
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #3182ce;
    }
  }

  ul,
  ol {
    margin-left: 1.5em;
    margin-bottom: 1em;

    li {
      margin-bottom: 0.5em;
    }
  }

  code {
    background-color: #f7fafc;
    color: #d73a49;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  pre {
    background-color: #1a202c;
    color: #e2e8f0;
    padding: 1.5em;
    border-radius: 6px;
    overflow-x: auto;
    margin-bottom: 1em;

    code {
      background-color: transparent;
      color: inherit;
      padding: 0;
    }
  }

  blockquote {
    padding-left: 1em;
    margin-left: 0;
    margin-bottom: 1em;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1em;

    th,
    td {
      border: 1px solid #e2e8f0;
      padding: 0.75em;
      text-align: left;
    }

    th {
      background-color: #f7fafc;
      font-weight: 600;
    }
  }

  hr {
    border: none;
    height: 1px;
    margin: 2em 0;
  }
`;

// Global 컴포넌트 export
export const GlobalStyle = () => <Global styles={globalStyles} />;
