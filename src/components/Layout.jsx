import 'modern-css-reset/dist/reset.min.css'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'


const Layout = ({ children }) => {

  const [open, setOpen] = useState(false)

  return (
    <Div>
      <Menu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Menu>

      {open ? (
        <>
          <MenuDiv>
            <Link href={"/"}>
              <a>
                まとめ
              </a>
            </Link>
            <Link href={"/paper"}>
              <a>
                本文
              </a>
            </Link>
            <Link href={"/references"}>
              <a>
                参考文献
              </a>
            </Link>
          </MenuDiv>
        </>
      ) : (
        <>
          <TitleDiv>
            <Title>ニヒリズムを通して真理のあり方を考える</Title>
            <SubTitle>Considering the state of truth through nihilism</SubTitle>
          </TitleDiv>
          <Body>
            {children}
          </Body>
        </>
      )}
    </Div>
  )
}

const MenuDiv = styled.div`
  position:fixed;
  top:0;
  min-height:100vh;
  width:100%;
  background-color:#ececec;
  `;

const Menu = styled.div`
  position: fixed;
  z-index:1;
  top:15px;
  right:15px;
  width: 30px;
  height: 30px;
  display: none;
  transition: all 0.2s linear;
  padding-left: ${({ open }) => open ? '2px' : '0px'};
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  
  div {
    width: 30px;
    z-index: 30;
    height: 2px;
    background-color: ${({ open }) => open ? '#020202' : '#020202'};
    transform-origin: .5px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  `;

const Div = styled.div`
  background-color:#ececec;
  min-height:100vh;
  `;

const Body = styled.div`
  padding-top:60px;
  max-width:1080px;
  margin:0 auto;
* {
  text-decoration: none;
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap');
}
`;

const TitleDiv = styled.div`
  padding:8px 0px;
  height:60px;
  position:fixed;
  width:100%;
  background-color:white;
  border-bottom:1px solid black;
`;
const Title = styled.h1`
  text-align:center;
  letter-spacing:1px;
  font-size:16px;
`;
const SubTitle = styled.h2`
  text-align:center;
  font-weight:lighter;
  font-size:13px;
`;

export default Layout
