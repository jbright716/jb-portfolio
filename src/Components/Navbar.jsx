import React, {useState} from 'react'
import styled from 'styled-components';



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
padding: 0.5em 4em;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
a{
  color: white;
}
`;
const Right = styled.div`
display: flex;
transition: 0.7s;
`;
const Left = styled.div`
font-size: 1.75em;`; 
const TabList = styled.ul`
display: flex;
gap: 3em;
`;
const TabItems = styled.li`
list-style-type: none;
&:hover {
  border-bottom: 3px solid grey;
}
`;

const TabLinks = styled.a`
text-decoration: none;
color: black;
`;
const Image = styled.img`
    position: absolute;
    width: 100vw;
    z-index: -1;
    bottom: 0;
`;
const Navbar = () => {
    const [navbar,setNavbar] = useState(false);


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
        <Right>
            <TabList>
                <TabItems>
                    <TabLinks href="#Home">Home</TabLinks>
                </TabItems>
                <TabItems>
                    <TabLinks href="#Skills">Skills</TabLinks>
                </TabItems>
                <TabItems>
                    <TabLinks href="#Projects">Projects</TabLinks>
                </TabItems>
                <TabItems>
                    <TabLinks href="#Contact">Contact</TabLinks>
                </TabItems>
            </TabList>
        </Right>
    </Wrapper>
    
</Container>
  )
}

export default Navbar