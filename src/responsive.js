import {css} from "styled-components"
export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 820px) {
        ${props}
    }
    `;

};

export const Medium = (props) => {
    return css`
    @media only screen and (max-width: 1200px) and (min-width: 821px){
        ${props}
    }
    `;

};


export const PC = (props) => {
    return css`
    @media only screen and (min-width: 1201px) and (max-width:1500px) {
        ${props}
    }
    `;

};

export const Large = (props) => {
    return css`
    @media only screen and (min-width: 1501px) {
        ${props}
    }
    `;

};