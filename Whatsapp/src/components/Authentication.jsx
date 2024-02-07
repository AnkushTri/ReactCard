import React,{useState} from 'react'
import styled from 'styled-components'
import { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { AuthContext } from '../context/auth';
const Authentication = () => {
  const {isAuthenticated,setIsAuthenticated }=useContext(AuthContext)
  const responseMessage = (response) => {
    console.log(response);
    setIsAuthenticated(true)
    console.log(response)
    console.log(isAuthenticated)
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
    {/* {authentication ? <Chatbox /> : */}
   <Wrapper>
    <div className="sec1">
      <h1>Use WhatsApp on your computer</h1>
      <div className='guide'>
        <ol>
          <li>Open WhatsApp on your phone</li>
            <li>Tap <b>Menu</b> : on Android, <b>Setting</b> on iPhone</li>
            <li>Tap <b>Linked devices</b> and then <b>Link a device</b></li>
          <li>Point your phone at this screen to capture the QR code</li>
        </ol>
      </div>
       </div>
    <div className="sec2">
        <img src="./qr.png" alt="qr" />
          <div className='auth'><GoogleLogin onSuccess={responseMessage} onError={errorMessage} /></div>
    </div>
   </Wrapper>
   /* <Box3 className="sec3">
      Link with Phone number
  </Box3> */
{/* } */}
   </>
  )
}

const  Wrapper = styled.div`
display: flex;
// width:100%;
.auth{
  position:absolute;
  margin:-11rem 6.5rem;
}
.sec1{
flex:3;
// width:90%;
margin-top:1rem;
}
.sec2{
flex:2;
}
.guide{
  font-size: 1.4rem;
}
h1{
  font-weight:100;
  margin-bottom:1.3rem;
}
li{
  padding:0.5rem 0;
}
img{
    width:16rem;
    margin:2rem 25%;
}

`
const Box3=styled.div`
  color:#128c7e;
  margin:3rem 0;
  font-size:1.5rem;
`

export default Authentication