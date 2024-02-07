import React from 'react'
import styled from 'styled-components'
import Authentication from './Authentication'

const Login = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="section1">
                    <img src="./logow.jpeg" alt="" />
                    <div className='text'>
                        <div className="part">Download WhatsApp for Windows</div>
                        <p>Get calling, screen sharing and a faster experience with the new Windows app.</p>
                    </div>
                    <button className='btn'>Get the app</button>
                    {/* <div className="part"></div> */}
                </div>
                <Authentication/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:85%;
    margin: -9rem  auto;
    background-color:white;
    height:100vh;

    .container{
        width:90%;
        margin:1rem auto;
        padding-top:2rem;
    }
    .section1{
        // height:4rem;
        width:85%;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border:1px solid grey;
        padding:0.5rem 1rem;
    }
    img{
        width:6rem;
        
    }
    .text{
        padding:3px 0;
        display:flex;
        flex-direction:column;
        aling-items:center;
        justify-content:center;
    }
    .part{
        font-size:1.2rem;
        font-weight:900;
        margin-bottom:-10px;

    }
    .btn{
        width:10rem;
        border-radius:10px;
        padding:0.6rem 0;
        font-size:1rem;
        background-color:#128c7e;

    }
    .section2{

    }
`

export default Login