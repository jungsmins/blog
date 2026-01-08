import styled from '@emotion/styled';

const Footer = () => {
  return (
    <Container>
      <span>© {new Date().getFullYear()} 박정민</span>
      <span>jungsmins00@gmail.com</span>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 1.5rem 0;
`;

export default Footer;
