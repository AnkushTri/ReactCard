import {useState,useEffect} from 'react'
import { useParams ,Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = () => {

    const { id } = useParams()
    const [userData, setUserData] = useState([{},])
    const [url, setUrl] = useState(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const getImage = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json();
            setUserData(data);
            console.log(data)
        } catch (err) {
            console.log("error while fetch image", err)
        }
    }

    useEffect(() => {
        getImage();
    }, [])


    return (
        <Wrapper>
      < Box >
      <Image>
        <h1>Images</h1>
       <ImgWrapper><Img src={userData.url} /></ImgWrapper>
       <ImgWrapper><Img src={userData.thumbnailUrl}/></ImgWrapper>
        </Image>
        <Detail>
          <h1>Content</h1>
        <Title>{userData.title}</Title>
        <h1>Album Id of Photo</h1>
        <Title>{userData.albumId}</Title>
        <Link to="/">Go back to home</Link>
        </Detail>
        </Box>
        </Wrapper>
    )
}


const Wrapper = styled.div`
  margin-top:.3rem;
  h1{
    text-align:center;
  }
`
const Box = styled.div`
display:flex;
overflow:hidden;

`
const Image = styled.div`
width:50%;
displey:flex;
flex-direction:column;
`
const Detail = styled.div`
`
const Img = styled.img`
height:38vh;
width:80%;
margin:.3rem 0;
`
const Title = styled.div`
  font-size:1.5rem;
  margin:0.5rem 2rem;
  text-align:center;
`
const ImgWrapper = styled.div`
  text-align:center
`

export default Card

// import React from 'react'
// import styled from 'styled-components'

// const Card = ({ userData }) => {
//     console.log(userData)

//     return (
//         <Wrapper>
//             < Box >
//             hii
//                 <ImgWrapper><Img src={userData.url} /></ImgWrapper>
//                 {/* <div><Img src={elem.thumbnailUrl}/></div> */}
//                 <Title> {userData.title}</Title>
//             </Box>
//         </Wrapper>
//     )
// }

// const Wrapper = styled.div`
//   display:flex;
//   flex-wrap:wrap;
//   gap:4.5rem;
//   border-radius:2rem;
  
// `
// const Box = styled.div`
// width:500px;
// height:400px;
// border:2px solid grey;
// `
// const Img = styled.img`
// width:80%;
// height:15rem;
// margin-top:2rem;

// `
// const Title = styled.div`
//   font-size:1.5rem;
//   margin:0.5rem 2rem;
//   // text-align:center;
// `
// const ImgWrapper = styled.div`
//   text-align:center
// `


// export default Card