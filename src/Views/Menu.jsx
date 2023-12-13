import styled from '@emotion/styled'

function Menu() {

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

  return (
    <MenuContainer>
      <MenuItem>Home</MenuItem>
      <MenuItem>iOS App Privacy Policy</MenuItem>
    </MenuContainer>
  );
}

export default Menu;
