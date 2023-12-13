import styled from '@emotion/styled'

const Image = styled.img`
  height: 30rem;
  width: 100%;
`;

function AppBoxView({ image }) {

  return (
    <Image src={image} />
  )
}

export default AppBoxView;