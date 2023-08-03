import styled from '@emotion/styled'
import { Paragraph } from '../Components/Typography';

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
    font-size: 1.5rem;
    font-weight: 600;
  `;

  return (
    <FooterContainer>
      <FooterColumn>
        <FooterItem>Contact</FooterItem>
        <Paragraph>231.445.1463</Paragraph>
        <Paragraph>adam@rdconcepts.design</Paragraph>
      </FooterColumn>
      <FooterColumn>
        <FooterItem>About Adam Reed</FooterItem>
        <Paragraph>
          Thank you for visiting my portfolio website and viewing my work.
          I built this website using React.js to develop the frontend portfolio and is deployed with firebase for easy hosting and ability to update with a GitHub Repository.
          iOS Designer & Developer, background in brand design and development.
          Located in Northern Michigan
        </Paragraph>
      </FooterColumn>

      
    </FooterContainer>
  );
}

export default Footer;
