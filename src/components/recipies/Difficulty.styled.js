import styled from "styled-components";

export const Div = styled.div`
   background-color: #ffe7bb;
   border-radius: 20px;
   margin-top: 15px;
`;

export const Title = styled.h2`
   color: black;
   font-size: 16px;
   padding: 2px;
`;

export const Button = styled.button`
    padding: 7px;
    margin: 10px;
    background-color: ${props => props.active ? "#f28b82ff" : "#e8b97cff"};
    color: ${props => props.active ? "#e8b97cff" : "black"};
`;







