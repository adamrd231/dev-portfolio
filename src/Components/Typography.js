import styled from '@emotion/styled'

const Title = styled.h1`
  font-size: 3em;
  color: #61dafb;
  margin-bottom: 1rem;
  width: fit-content;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.25em;
  color: ${ props => props.color || 'white' };
  margin: 0.5rem 0.5rem 0.25rem 0.5rem;
  text-align: center;

`;

const Paragraph = styled.p`
  font-size: 1em;
  color: ${ props => props.color || 'white' };
  margin: 0.25rem 0.5rem;
  text-align: center;
`;

const Link = styled.a`
  color: #61dafb;
`;

export { Title, Subtitle, Paragraph, Link };