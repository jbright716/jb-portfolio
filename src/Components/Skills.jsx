import React from 'react';
import styled from 'styled-components';
import img from '../Assets/Jbrightski.png';
import {tech} from '../JSFiles/technology';
import resume from '../Assets/JusticeBrightResume.pdf';
import {PC, Medium,mobile, Large} from '../responsive';

const Container = styled.div`
    padding: 1em 0;
    background: #152039;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5em;
    color: #fff;
    text-align: center;

    ${mobile({
      flexDirection: "column"
    })}

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
const Description = styled.p`
    font-size: 1.25em;
    
    ${mobile({
      width: "85vw"
      })}
    ${Medium({
      width: "50vw"
      })}

    ${Large({
        width: "57rem",
        fontSize: "1.3em"
        })}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;
const Tech = styled.div`
  display: flex;
  align-items: center;
  jusify-content: center;
  gap: 1em;
  flex-wrap: wrap;
`;
const Image = styled.img`


${mobile({
  display: "none"
})}
${Medium({
width: "250px"
})}
`;
const Logo = styled.img`
  width: 50px;
  
  transition: all 0.5s ease;
  
  &: hover {
    transform: scale(1.25);
  }
`;
const Button = styled.a`
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
        <Button href= {resume} >View Resume</Button>

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