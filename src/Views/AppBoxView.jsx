import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 40vh;
  width: 100%;
  object-fit: cover;
  overflow: clip;
`;

const Title = styled.h2`
  position: absolute;
  color: white;
  padding: 1rem;
  corner-radius: 1rem;
  background: #333;
  border-radius: 1rem;
`;

function AppBoxView({ project }) {

  return (
    <a href={project.link}>
    <Container>
      <Title>{project.name}</Title>
      <Image src={project.image} />
    </Container>
    </a>
    
  )
}

export default AppBoxView;