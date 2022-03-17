import React, {useState} from 'react'
import styled from 'styled-components';
import Modal from './Modal';

const Container = styled.div`
display: flex;
height: 65vh;
width: 90vw;
flex-direction: ${({flip}) => flip};
align-items: center;
position: relative;
margin: 1.5em;
overflow: hidden;
transition: all 0.5s ease;

& .left{
    margin-left: -100px;
}

& .right{
    margin-right: -100px;
}
`;
const Demo = styled.div`
flex: 1.15;
`;
const Info = styled.div`
background: #152039;
padding-bottom: 1em;
height: 75%;
position relative;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 1em;
`;
const Image = styled.img`width: 100%`;
const Title = styled.h1`
color: #DE887A;
font-size: 2.25em;
`;
const Description = styled.p``;
const Technologies = styled.p`
    font-size: 1.75em;
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

    font-size: 1.25em;
    &: hover{
    background: #DE887A;
    color: white;
    }
    `;
const Fancy = styled.div`
    width: 100%;
    height: 12px;
    background: #DE887A;
    
`;
const Project = ({item}) => {
    const[showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev)
    }
  return (
    <Container flip = {item.id % 2 === 0 ? 'row' : 'row-reverse'} >
        

        <Demo>
            <Image src={item.demo}/>
        </Demo>
        <Info className= {item.id % 2 === 0 ? 'left' : 'right'}>
        <Fancy/>
        <Technologies>{item.technologies}</Technologies>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Button onClick={openModal} >View Site</Button>
        <Modal showModal = {showModal} setShowModal={setShowModal}/>
        <Button>View Code</Button>
        </Info>
    </Container>
  )
}

export default Project