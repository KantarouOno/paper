import 'modern-css-reset/dist/reset.min.css'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'


const Layout = ({ children }) => {

  const [open, setOpen] = useState(false)

  return (
    <Div>
      <Box>
        <Menu open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Menu>
      </Box>

      {open ? (
        <>
          <MenuDiv>
            <List>
              <div>
                <Link href={"/"}>
                  <a onClick={() => setOpen(!open)}>
                    まとめ
                  </a>
                </Link>
              </div>
              <div>
                <Link href={"/paper"}>
                  <a onClick={() => setOpen(!open)}>
                    質問
                  </a>
                </Link>
              </div>
              <div>
                <Link href={"/references"}>
                  <a onClick={() => setOpen(!open)}>
                    参考文献
                  </a>
                </Link>
              </div>
            </List>
          </MenuDiv>
        </>
      ) : (
        <>
          <TitleDiv>
            <Link href={"/"}>
              <a>
                <Title>ニヒリズムを通して真理のあり方を考える</Title>
                <SubTitle>Considering the state of truth through nihilism</SubTitle>
              </a>
            </Link>
          </TitleDiv>
          <Body>
            {children}
          </Body>
          <Footer>
            <p>© 2022 KantarouOno</p>
          </Footer>
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

const List = styled.div`
  display:column;
  justify-content:space-around ;
  text-align:center ;
  width:100px;
  height:300px;
  position: fixed;
  inset: 0;
  margin: auto;
  div {
    line-height:100px;
  }
  a {
    font-weight:bold;
    text-decoration:none;
    color:black;
  }
  `;

const Box = styled.div`
  background-color:#ffffff;
  z-index:99;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%)
             translateY(-50%);
  border:solid 1.5px black;
  border-radius:100%;
  width: 55px;
  height: 55px;
  `;

const Menu = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  z-index:98;
  width: 30px;
  height: 30px;
  display: none;
  transition: all 0.2s linear;
  padding-left: ${({ open }) => open ? '4px' : '0px'};
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
  text-decoration: none;
  font-family: 'Noto Sans JP', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap');
  `;

const Footer = styled.div`
  background-color:#ececec;
  p {
    color:black;
    font-size:12px;
    padding:2px 0px;
    text-align:center;
  }
  `;

const Body = styled.div`
  padding-top:60px;
  max-width:1080px;
  margin:0 auto;
* {
  text-decoration: none;
  font-family: 'Noto Sans JP', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap');
}
`;

const TitleDiv = styled.div`
a {
  text-decoration:none;
    color:black;
}
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
