import React, { useEffect, useState } from 'react'
// import Card from './Card'
import styled from "styled-components"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'


const Cards = () => {
  const navigate=useNavigate();
  const Batches=[
  {
    "id":1,
    "batch":"Batch1",
    "content":"This is Batch One"
  },
  {
    "id":2,
    "batch":"Batch2",
    "content":"This is Batch Two"
  },
  {
    "id":3,
    "batch":"Batch3",
    "content":"This is Batch Three"
  },
  ]
  const [batches,setBatches]=useState(Batches)
      const handleClick = (id) => {
        console.log(id)
        const link = `/${id}`;
        navigate(link)
      }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Batches</h1>
      <Wrapper>
        {batches.map((elem) => {
          return (
            < Box key={elem.id}>
              <ImgWrapper><Img src="images/batchs.jpg" /></ImgWrapper>
              <Title>{elem.batch}</Title>
              <Title>{elem.content}</Title>
              <Button onClick={() => handleClick(elem.id)}>See  Details</Button>
            </Box>
          )
        })}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:2rem;
  border-radius:2rem;
  
`
const Box = styled.div`
display:flex:
flex-direction:column;
aling-items:center;
justify-content:center;
width:350px;
height:400px;
margin:0 auto;
border:2px solid grey;
`
const Img = styled.img`
width:80%;
// height:15rem;
margin-top:2rem;
`
const Button = styled.button`
  width:10rem;
  margin:0 30%;
  padding:4px 0;
  font-size:1rem;
  &:hover{
    cursor:pointer;
  }
`
const Title = styled.div`
  font-size:1.2rem;
  height:2rem;
  // border:2px solid grey;
  margin:0.5rem 2rem;
  // text-align:center;
`
const ImgWrapper = styled.div`
  text-align:center
`

export default Cards