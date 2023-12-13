import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom';

const MenuContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
font-weight: 600;
font-size: 12px;
color: white;
min-height: 1rem;
padding: 1rem;
box-sizing: border-box;
gap: 1rem;
cursor: pointer;
background: #222222;
`;

const MenuItem = styled.div`

`;

function Menu() {
  const navigate = useNavigate();

  const ClickedHome = () => {
    navigate('/');
  }

  const ClickPrivacy = () => {
    navigate('/privacy');
  }

  return (
    <MenuContainer>
      <MenuItem onClick={ClickedHome}>Home</MenuItem>
      <MenuItem onClick={ClickPrivacy}>iOS App Privacy Policy</MenuItem>
    </MenuContainer>
  );
}

export default Menu;
