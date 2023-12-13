import styled from '@emotion/styled'

function Footer() {

  const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #ededed;
    color: #222;
    min-height: 10rem;
    box-sizing: border-box;
    padding: 1.5rem 0 3rem 0;
    font-size: 12px;

  `;

  const FooterTextContainer = styled.div`
    width: 85%;
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
      <FooterTextContainer>
        <FooterColumn>
          <FooterItem>Contact</FooterItem>
          <Paragraph>231.445.1463</Paragraph>
          <Paragraph>adam@rdconcepts.design</Paragraph>
        </FooterColumn>
        <FooterColumn>
          <FooterItem>About this site</FooterItem>
          <Paragraph>
            Thank you for visiting, currently living and working out of Northern Michigan. Looking for remote and hybrid opportunities in native swift and swiftUI. 
            
           
          </Paragraph>
          <Paragraph>
            This site was built with React.js and Emotion.js and Javascript, hosted with Github pages
          </Paragraph>
          <Footnote>Updated Aug, 2023</Footnote>
        </FooterColumn>
      </FooterTextContainer>
      

      
    </FooterContainer>
  );
}

export default Footer;
