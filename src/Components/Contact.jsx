import React from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Container = styled.div`
background: #152039;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
padding: 4em;
gap: 3em;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
`;

const Form = styled.form`
    width: 50%;
    background: #DE887A;
    display: flex; 
    flex-direction: column;
    gap: 1em;
    padding: 2em;
    border: solid;
    border-width: 10px;
    border-color: white;
    
`;
const Input = styled.input`

  color: #152039;
  width: 80%;
  padding: 0.5em;
`;

const ContactMsg = styled.input`
  height: 10rem;
  width: 80%;
`;


const Label = styled.label`
    font-size: 1.25em;
`;
const Button = styled.button`
    font-size: 1em;
    width: 7rem;
    padding: 0.75em 0em;
   border-width: 10px;
   border: solid;
   border-color: white;
   border-radius: 5%;
    background: none;
    color: white;
    transition: 0.5s ease;
    text-decoration:none;
    font-size: 1.25em;
    &: hover{
    background: white;
    color: #DE887A;
    }

`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
   
`;
const CTA = styled.h1`
    font-size: 4em;
`;
const Header = styled.h2``;
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6wzifyt', 'template_uwqtk5a', e.target, 'rj1ZPXxfS6YN0b96-').then(res => {
            console.log(res);
        }).catch(
            err => console.log(err));
        }
    
  return (
    <Container id = "Contact">
    <CTA>Like What You See?</CTA>
    <Header>
    Do not hesitate to contact me to discuss a possible project or learn more about my work.
    </Header>
    <Form  onSubmit={sendEmail}>

    <Row>
    <Wrapper>
        <Label for = "first" >First *</Label>
        <Input required id ="first" name ="first" type="text" />
    </Wrapper>
   
    <Wrapper>
        <Label for = "last" >Last *</Label>
        <Input id ="last" name= "last" type="text" />
    </Wrapper>
    </Row>
    <Row>
    <Wrapper>
        <Label for = "email" >Email *</Label>
        <Input required id ="email" name = "email" type="email"/>
    </Wrapper>
    <Wrapper>
        <Label for = "number" >Number</Label>
        <Input id ="number" name = "number" type="text"/>
    </Wrapper>
    </Row>
    
    
    <Wrapper>
        <Label for = "message">Message</Label>
        <ContactMsg required id = "message" name = "message" type= "text"/>
    </Wrapper>

    <Wrapper>
    <Button>Send Message</Button>
    </Wrapper>
    </Form>
    
    </Container>
  )
}

export default Contact