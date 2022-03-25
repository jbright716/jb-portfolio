
import React from 'react'
import styled from 'styled-components';
import {projects} from '../JSFiles/projectDetails.js'
import Project from './Project';
import {PC, Medium,Large} from '../responsive';
const Container = styled.div`
    background: #152039;
    color: #fff;
    text-align: center;
    padding: 1em 0;
`;
const Title = styled.h1`
  font-size: 3em;

  ${Medium({
      fontSize: "4em"
  })}
  ${PC({
    fontSize: "5em"
  })}
  ${Large({
    fontSize: "6em"
  })}
`;
const List = styled.div`
display: flex;
flex-direction: column;
gap: 2em;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em; 
    align-items: center;
    justify-content: center;  
`;
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