import {css} from "styled-components"
export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 821px) {
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
    @media only screen and (min-width: 1200px) {
        ${props}
    }
    `;

};