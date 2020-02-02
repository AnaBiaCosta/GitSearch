import styled from 'styled-components'

export const Body = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 0px 48px 0px 42px;
  background-color: #24292E;
  color: #F6F8FA;
`

export const Brand = styled.img`
  width: 37px;
  height: 37px;
`

export const Nav = styled.nav`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 600;
`

export const NavList = styled.ul`
  display: flex;
`

export const NavItem = styled.li`
  list-style-type: none;
  margin-right: 16px;
  cursor: pointer;
`
