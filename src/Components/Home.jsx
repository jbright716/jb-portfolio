
import { LinkedIn, GitHub } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import img from '../Assets/cityCombined.jpg';


const Container = styled.div`
    position: relative;
    min-height: 100vh;
    background: url(${img});
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: -1;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;
align-items: center;
color: #fff;
text-shadow: 1px 1px 1px #000, 
               3px 3px 5px grey;
`;
const Header = styled.h1`
font-size: 7.5em;
  
`;
const Description = styled.p`
font-size: 2.5em;
`;
const Image = styled.img`
    position: absolute;
    width: 100vw;
    z-index: -1;
    bottom: 0;
`;
const Links = styled.div`
display: flex;
flex-direction: column;
position: absolute;
bottom 5%;
right: 5%;


`;


const Link = styled.a`
text-decoration: none;
color: white;

`;
const Home = () => {
  return (
    <Container id = "Home">
    <Links>
        <Link >
            <LinkedIn style={{ fontSize: 50 }}/>
        </Link>
        <Link>
            <GitHub style={{ fontSize: 50 }}/>
        </Link>
       

    </Links>
    
    <Wrapper>
    <Header> Hello, I'm Justice </Header>
    <Description>Full Stack Developer</Description>
    </Wrapper>    
        
    </Container>
  )
}

export default Home