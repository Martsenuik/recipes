import styled from "styled-components";

export const List = styled.ul`
    display: flex;
`;

export const Item = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
`;

export const Img = styled.img`
    border-radius: 20px;
`;

export const Name = styled.h2`
    color: black;
    font-size: 16px;
`;

export const AllInformation = styled.div`
    display: flex;
    gap: 15px;
    background-color: #ffe7bb;
    border-radius: 60px;
    padding-right: 10px;
    padding-left: 10px;
`;

export const InformationText = styled.p`
    color: black;
    font-size: 12px;
`;
