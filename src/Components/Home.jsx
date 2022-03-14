import React from 'react'
import styled from 'styled-components';
import img from '../Assets/background.jpg';

const Container = styled.div`
    display: block;
    min-height: 100vh;
    background: url(${img});
    background-size: cover;
    
`;

const Wrapper = styled.div``;
const Right = styled.div``;
const Left = styled.div``; 
const TabList = styled.ul``;
const TabItems = styled.li`
list-style-type: none;
&:hover {
  border-bottom: 1px solid grey;
}
`;

const TabLinks = styled.a`
text-decoration: none;
color: black;
`;
const Home = () => {
  return (
    <Container>
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

export default Home