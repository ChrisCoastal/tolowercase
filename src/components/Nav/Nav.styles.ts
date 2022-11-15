import styled from '@emotion/styled';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 4rem;
  border-bottom: solid 1px #999;
`;

export const NavItemsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  list-style: none;
`;

export const NavItem = styled.li`
  list-style: none;
`;
