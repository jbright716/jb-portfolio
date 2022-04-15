import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;
const Section = styled.section`
    position:fixed;
    background: white;
    width: 80%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`;
const Content = styled.img``;
const Modal = ({ showModal, setShowModal}) => {
   
    return (
       <>
        {showModal? 
      <Wrapper>
        <Section showModal = {showModal}>
          
          <button type="button" onClick= {() => { setShowModal(prev => !prev)}}>
            Close
          </button>
          <Content/>
        </Section>
      </Wrapper>

      : null} 
        </>
        );
  };

export default Modal