import { Title, Subtitle, Paragraph, Link } from '../Components/Typography';
import { Row } from '../Components/Layout';
import ImageAndSubtitle from '../Components/ImageAndSubTitle';
import xcode from '../Images/xcode.png';
import swift from '../Images/swiftIcon.png';
import reactIcon from '../Images/react.png';
import styled from '@emotion/styled';
import PortfolioApps from '../Constants/AppStorePortfolio';
import AppBoxView from './AppBoxView';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  background: #333;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 1rem;
  min-height: 50vh;
  justify-content: center;
  align-items: center;
`;

const GridLayout = styled.div`
display: grid;
width: 100%;
// grid-template-columns: minmax(auto, 50%) minmax(auto, 50%);
grid-template-columns: repeat(2, calc(50% - 0.25em));
grid-gap: 0.5em;
@media (max-width: 768px) {
  grid-template-columns: 1fr; /* For smaller widths, switch to a single column */
  grid-gap: 10px;
};
border: none;
box-sizing: border-box;
background: #333;
`;

function Home() {
  return (
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
      <GridLayout>
          { PortfolioApps.map(project => (
            <AppBoxView project={project} />
          ))}
        </GridLayout>
    </Container>
  );
}

export default Home;
