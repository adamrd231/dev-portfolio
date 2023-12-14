import styled from '@emotion/styled'
import { Link } from '../Components/Typography';

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  position: relative;
  height: 40vh;
  width: 100%;
  object-fit: cover;
  overflow: clip;
  z-index: 1;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #111;
  opacity: 0.5;
  z-index: 2;
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  text-align: center;
  color: white;
  z-index: 3;
`;

const Description = styled.div`
 font-size: 12px;
 margin-bottom: 0.5rem;
`;

const Button = styled.button`
  font-size: 12px;
  padding: 0.5rem 0.7rem;
  background: #222;
  color: white;
  font-weight: 700;
  border-radius: 0.6rem;
`;

function AppBoxView({ project }) {

  return (
    <Container>
      <TextContainer>
        <Title>{project.name}</Title>
        <Description>{project.description}</Description>
        <Link href={project.link}>
          <Button>View on App Store</Button>
        </Link>
      </TextContainer>
      <Image src={project.image} />
      <Overlay />
    </Container>
  )
}

export default AppBoxView;