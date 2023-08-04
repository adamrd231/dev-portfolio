import { Title, Subtitle, Paragraph, Link } from '../Components/Typography';
import { ComponentLayout, Row } from '../Components/Layout';
import ImageAndSubtitle from '../Components/ImageAndSubTitle';
import xcode from '../Images/xcode.png';
import swift from '../Images/swiftIcon.png';
import reactIcon from '../Images/react.png';


function Home() {
  return (
    <ComponentLayout>
      <Title><Link href="https://github.com/adamrd231" target="_blank">Adam Reed.</Link></Title>
      <Subtitle>iOS software engineer living and working out of northern Michigan.</Subtitle>
      <Paragraph>
        Creative problem solver with unique approaches to developing business solutions. Specialized in native iOS, I have launched 8 projects to the App Store. Self-starter who is passionate about learning new technologies and building products that make a difference. Background in UI/UX and brand developemnt.
      </Paragraph>
      <Row>
        <ImageAndSubtitle image={xcode} text="8 Applications with average 4.35 star rating launched to " link="https://apps.apple.com/us/developer/rd-concepts/id1293498470" linkName="App Store" />
        <ImageAndSubtitle image={swift} text="4+ years native iOS development with swift focusing on swiftUI framework" />
        <ImageAndSubtitle image={reactIcon} text="Experienced in front-end web dev with React.js" />
      </Row>
    </ComponentLayout>
  );
}

export default Home;
