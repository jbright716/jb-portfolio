import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    height: 100vh;
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
const Description = styled.p`
    font-size: 1.25em;
    width: 50vw;
`;

const Wrapper = styled.div``;
const Skills = () => {
  return (
    <Container id = "Skills">
        
       
        <Wrapper>
        <Title>Skills & Experience</Title>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat ad mollitia blanditiis voluptates pariatur harum officia quae earum hic aliquid, laboriosam at, ut iusto id quasi magnam similique? Exercitationem.</Description>
    
        </Wrapper>
    </Container>
  )
}

export default Skills