
import React from 'react'
import styled from 'styled-components';
import {projects} from '../JSFiles/projectDetails.js'
import Project from './Project';
const Container = styled.div`
    background: #152039;
    display: flex;
    flex-direction: verticle;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    
`;
const Title = styled.h1`
    font-size: 5em;
`;
const List = styled.div`
display: flex;
flex-direction: column;
`;

const Wrapper = styled.div``;
const Projects = () => {
  return (
    <Container >
        
        <Wrapper>
        <Title id = "Projects">Projects</Title>

        <List>
        {projects.map(item => (
            <Project item={item} key={item.id}/>
        ))}
        </List>
        </Wrapper>
    </Container>
  )
}



export default Projects