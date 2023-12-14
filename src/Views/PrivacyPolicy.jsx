import { Paragraph, Subtitle } from "../Components/Typography";
import styled from '@emotion/styled'
import PrivacyPolicyInfo from "../Constants/PrivacyPolicyInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  min-height: 80vh;
`;

function PrivacyPolicy() {
  return (
    <Container>
      { PrivacyPolicyInfo.map( paragraph => (
        <>
          <Subtitle color='#222'>{paragraph.title}</Subtitle>
          <Paragraph color='#222'>{paragraph.paragraph}</Paragraph>
        </>
      ))}
    </Container>
  ) 
}

export default PrivacyPolicy;