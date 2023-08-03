import styled from '@emotion/styled'

function Footer() {

  const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 100%;
    background-color: #ededed;
    color: #222;
    min-height: 10rem;
    padding: 3rem 2rem;
    box-sizing: border-box;
  `;

  const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const FooterItem = styled.div`
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0 0.25rem 0;
    text-transform: uppercase;
    color: #555;
    font-weight: 800;
  `;
  
  const Paragraph = styled.div`
    margin: 0.2rem 0;
  `;

  const Footnote = styled.div`
    font-size: 0.75rem;
    margin: 0.25rem 0;i
  `;

  return (
    <FooterContainer>
      <FooterColumn>
        <FooterItem>Contact</FooterItem>
        <Paragraph>231.445.1463</Paragraph>
        <Paragraph>adam@rdconcepts.design</Paragraph>
      </FooterColumn>
      <FooterColumn>
        <FooterItem>About this site</FooterItem>
        <Paragraph>
          Thank you for visiting my portfolio website and viewing my work.
          I built this website using React.js to develop the frontend portfolio and is deployed with firebase for easy hosting and ability to update with a GitHub Repository.
          iOS Designer & Developer, background in brand design and development.
          Located in Northern Michigan
        </Paragraph>
        <Footnote>Updated Aug, 2023</Footnote>
      </FooterColumn>

      
    </FooterContainer>
  );
}

export default Footer;
