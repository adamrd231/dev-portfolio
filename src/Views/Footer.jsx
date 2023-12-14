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
    padding: 0.75rem 0 1.5rem 0;
    font-size: 12px;
  `;

  const FooterTextContainer = styled.div`
    width: 79%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `;

  const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 11px;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #d1d1d1;
  `;

  const FooterRow = styled.div`
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    gap: 1rem
  `;

  const FooterItem = styled.div`
    font-size: 11px;
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
    font-size: 11px;
    margin: 0.25rem 0;i
    font-weight: 700;
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
            Thank you for visiting my website. I am currently living and working out of Northern Michigan. Opportunity to bring large impact as a front-end developer, being able to bring ideas through sketching to deployment. With a speciality in native development using swift and swiftUI, I am also an experienced designer.  
          </Paragraph>
          <Paragraph>
            
          </Paragraph>
     
        </FooterColumn>
        <FooterRow>
          <Paragraph>rdConcepts design & development</Paragraph>
          <FooterRow>
            <Paragraph>Privacy Policy</Paragraph>
            <Footnote>Updated Dec, 2023</Footnote>
          </FooterRow>
        </FooterRow>
         
      </FooterTextContainer>
      

      
    </FooterContainer>
  );
}

export default Footer;
