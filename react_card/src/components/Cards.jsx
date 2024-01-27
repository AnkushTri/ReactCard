import React, { useEffect, useState } from 'react'
// import Card from './Card'
import styled from "styled-components"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'


const Cards = () => {

  const navigate=useNavigate();
const [userData,setUserData]=useState([{},])
  const [url, setUrl] = useState(`https://jsonplaceholder.typicode.com/photos`)
const getImage=async()=>{
    try{
      const response = await fetch(url)
    const data= await response.json();
    setUserData(data);
    // console.log(userData,data)
    }catch(err){
        console.log("error while fetch image",err)
    }
}

const handleClick=(id)=>{
  console.log(id)
  const link=`/${id}`;
   navigate(link)
  
}

useEffect(()=>{
    getImage();
},[])


  return (
    <>
    <h1 style={{textAlign:"center"}}>Our Photos</h1>
    <Wrapper>
    {userData.map((elem)=>{
      return (
        < Box key={elem.id}>
          <ImgWrapper><Img src={elem.url} /></ImgWrapper>
          {/* <div><Img src={elem.thumbnailUrl}/></div> */}
          <Title>{elem.title}</Title>
          <Button onClick={()=>handleClick(elem.id)}>more</Button>
        </Box>
      )
    }) }
    </Wrapper>
    </>
    )
}

const Wrapper=styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:2rem;
  border-radius:2rem;
  
`
const Box=styled.div`
display:flex:
flex-direction:column;
aling-items:center;
justify-content:center;
width:350px;
height:400px;
border:2px solid grey;
`
const Img=styled.img`
width:80%;
height:15rem;
margin-top:2rem;
`
const Button = styled.button`
  width:5rem;
  margin:1rem 35%;
  padding:2px 20px;
  font-size:1rem;
`
const Title=styled.div`
  font-size:1.2rem;
  height:3rem;
  // border:2px solid grey;
  margin:0.5rem 2rem;
  // text-align:center;
`
const ImgWrapper=styled.div`
  text-align:center
`
export default Cards