import { Close, MenuSharp } from '@mui/icons-material';
import React, {useState} from 'react';
import styled from 'styled-components';
import {PC, Medium, mobile} from '../responsive';


const Container = styled.div`
    z-index: 1;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 2em;
    transition-duration: 500ms;
    background: ${({bg}) => bg || 'none'};
    color: #fff;
    text-shadow: 1px 1px 1px #000, 
               3px 3px 5px grey;
`;

const Wrapper = styled.div`
padding: 0.5em 0.5em;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
a{
  color: white;
}

${Medium({
    padding: "0.5em em"
  })}

${PC({
    padding: "0.5em 4em"
  })}


`;
const Right = styled.div`
display: flex;

${mobile({
    height: "100vh",
    position: "fixed",
    top: "0",
    right: "0",
    inset: "0 0 0 30%",
    flex: "0",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.8)",
    transition: "transform 0.3s ease-out",
    alignItems: "center",
    jusifyContent: "center",
    paddingTop: "2em",
    gap: "1em"
    
  })}

  transform: ${({sliding}) => sliding};

  ${PC({
    transform: "none"
  })}

  ${Medium({
    transform: "none"
  })}


`;
const Left = styled.div`
font-size: 1em;

${Medium({
    FontSize: "1.75em",
    
  })}

${PC({
    FontSize: "1.75em",
    
  })}
`; 
const TabList = styled.ul`
display: flex;
flex-direction: column;
gap: 3em;

${Medium({
    flexDirection: "row",
    gap: "1em"
    
  })}
${PC({
    flexDirection: "row",
    gap: "3em"
    
  })}
`;
const TabItems = styled.li`
list-style-type: none;
&:hover {
  border-bottom: 3px solid #455E80;
}


`;

const TabLinks = styled.a`
text-decoration: none;
color: black;
`;

const MenuIcon = styled.div`
display: none;


${mobile({
    display: "block",
    zIndex: "200"
  })}
  `;



const Navbar = () => {
    const [navbar,setNavbar] = useState(false);
    const [ShowNav, setShowNav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 20) {
            setNavbar(true);        
        } else {
            setNavbar(false);
        }
        console.log(window.scrollY);
    };

    window.addEventListener('scroll', changeBackground);
  return (
    <Container bg = {navbar? '#DE887A' : 'none'} >
        
    <Wrapper>
        <Left>JB</Left>
        <MenuIcon><MenuSharp style={{ fontSize: 35 }}  onClick= {() => {setShowNav(prev => !prev)}}/></MenuIcon>
        <Right showing = {ShowNav? 'flex' : 'none'} sliding = {ShowNav? 'translateX(0)' :'translateX(100%)'}>
           
            <TabList>
                <TabItems>
                    <TabLinks onClick = {() => {if(ShowNav){setShowNav(prev => !prev)}} }href="#Home">Home</TabLinks>
                </TabItems>
                <TabItems>
                    <TabLinks onClick = {() => {if(ShowNav){setShowNav(prev => !prev)}} } href="#Skills">Skills</TabLinks>
                </TabItems>
                <TabItems>
                    <TabLinks onClick = {() => {if(ShowNav){setShowNav(prev => !prev)}} } href="#Projects">Projects</TabLinks>
                </TabItems>
                <TabItems>
                    <TabLinks onClick = {() => {if(ShowNav){setShowNav(prev => !prev)}} } href="#Contact">Contact</TabLinks>
                </TabItems>
            </TabList>
        </Right>
    </Wrapper>
    
</Container>
  )
}

export default Navbar