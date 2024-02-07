import React from 'react'
import Header from './Header'
import Login from './Login'
import styled from 'styled-components'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import Chatbox from "./Chatbox"
const Home = () => {

  const { isAuthenticated } = useContext(AuthContext)

  return (
    isAuthenticated? 
    <Chatbox/>:
    <Wrapper>
        <Header/>
        <Login/>
    </Wrapper>
  
  )
}

const Wrapper=styled.div`
background-color:grey;
height:100%;
`

export default Home