import React from 'react'
import styled from 'styled-components';
import img from '../Assets/Jbrightski.png'
import {tech} from '../JSFiles/technology'
const Container = styled.div`
    height: 100vh;
    background: #152039;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5em;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;
const Tech = styled.div`
  display: flex;
  gap: 1em;
`;
const Image = styled.img`
`;
const Logo = styled.img`
  width: 50px;
  transition: all 0.5s ease;

  &: hover {
    transform: scale(1.25);
  }
`;
const Button = styled.button`
  width: 7rem;
  padding: 0.75em 0em;
  border-width: 5px;
  border: solid;
  border-color: #DE887A;
  border-radius: 5%;
  background: none;
  color: #DE887A;
  transition: 0.5s ease;
  text-decoration:none;
  font-size: 1.25em;
  &: hover{
  background: #DE887A;
  color: white;
`;

const Skills = () => {
  return (
    <Container id = "Skills">
        
       <Image src = {img} />
        <Wrapper>
        <Title>About Me</Title>
        <Description> &emsp;Hello! My name is Justice, I am an extremely creative and self-motivated individual with a serious passion for utilizing technology to solve real world problems. I possess a diverse set of skills ranging from creating savvy web and desktop applications to indie game Development.</Description>
        <Button>View Resume</Button>
        <Tech>
        {tech.map(item => (
           <Logo src={item.image}/>
        ))}
        </Tech>
        </Wrapper>
    </Container>
  )
}

export default Skills