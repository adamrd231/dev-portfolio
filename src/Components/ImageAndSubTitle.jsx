import styled from '@emotion/styled';
import { Link } from './Typography'

function ImageAndSubtitle(props) {
  const { image, text, link, linkName } = props;

  const Image = styled.img`
    height: 3rem;
    width: 3rem;
    margin-bottom: 0.66rem;
  `;

const Container =  styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  text-align: center;
  padding: 1rem;
`;

const TextContainer = styled.div`
  color: white;
`;

  return (
    <Container>
      <Image src={image} />
      <TextContainer>{text}{props.link && (
        <Link href={link} target="_blank">{linkName}</Link>
      )} </TextContainer>
      
      
    </Container>
  );
}

export default ImageAndSubtitle;