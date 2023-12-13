import { Title, Subtitle, Paragraph, Link } from '../Components/Typography';
import { ComponentLayout, Row } from '../Components/Layout';
import ImageAndSubtitle from '../Components/ImageAndSubTitle';
import xcode from '../Images/xcode.png';
import swift from '../Images/swiftIcon.png';
import reactIcon from '../Images/react.png';
import styled from '@emotion/styled'

const Container = styled.div`
  min-height: 80vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;

`;

function Home() {
  return (
    <ComponentLayout>
      <Container>
        <SubContainer>
          <Title><Link href="https://github.com/adamrd231" target="_blank">Adam Reed.</Link></Title>
          <Subtitle>Front end software designer & developer.</Subtitle>
          <Paragraph>
            Creative problem solver with focus on creating and developing intuitive and beatiful solutions for screens.
            Specialized in native iOS, I have launched 10 projects to the App Store.
            Self-starter who is passionate about learning new technologies and building products that make a difference.
            Background in UI/UX and brand development.
          </Paragraph>
          <Row>
            <ImageAndSubtitle image={xcode} text="10 Applications deployed to app store with average 4.35 star rating " link="https://apps.apple.com/us/developer/rd-concepts/id1293498470" linkName="App Store" />
            <ImageAndSubtitle image={swift} text="4+ years native iOS development with swift & swiftUI" />
            <ImageAndSubtitle image={reactIcon} text="Experienced in front-end web dev, HTML / CSS / React.js" />
          </Row>
        </SubContainer>
      </Container>
    </ComponentLayout>
  );
}

export default Home;
