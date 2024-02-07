import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper>
        <div className="header">
          <div className="logo"><img src="./lo.jpeg" alt="" /></div>
          <div className="title"><h1>Whatsapp Web</h1></div>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
    height:39vh;
    // background-color:#075e54;
    background-color:#128c7e;
    // background-color:#25d366;
    padding:0.7rem 0 .5rem 0;
    .header{
        display:flex;
        justify-content:start;
        align-items:center;
        gap:1rem;
        margin-left:5rem;
    }
    .logo{
    }
    img{
        width:3rem;
        border-radius:50%;

    }
`



export default Header