import styled from '@emotion/styled'
import { MainLayout } from './Components/Layout';
import { Title, Subtitle, Paragraph} from './Components/Typography';

function App() {
  return (
    <MainLayout className="App">
      <Title>Adam Reed.</Title>
      <Subtitle>iOS software engineer living and working out of northern Michigan.</Subtitle>
      <Paragraph>
        Creative problem solver with unique approaches to developing business solutions. Specialized in native iOS, I have launched 8 projects to the App Store. I am a self-starter who is passionate about learning new technologies and building products that make a difference, backgorund in UI/UX and brand developemnt.
      </Paragraph>
    </MainLayout>
  );
}

export default App;
