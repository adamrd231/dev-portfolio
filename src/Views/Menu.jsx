import styled from '@emotion/styled'

function Menu() {

  const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    background-color: #000;
    color: white;
    min-height: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  `;

  const MenuItem = styled.div`

  `;

  return (
    <MenuContainer>
      <MenuItem>Home</MenuItem>
      <MenuItem>Links</MenuItem>
      <MenuItem>Menu</MenuItem>
    </MenuContainer>
  );
}

export default Menu;
