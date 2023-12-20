import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 25px;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(19, 19, 31, 0.05);
    background-color: ${props => props.theme.color.dark40};
`;

export const TextWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
`

export const Header = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Span = styled.span<{type?: string}>`
    color: ${props => props.theme.color.darkScale.dark20};
    font-size: ${props => props.type === "description" ?  props.theme.font.md :  props.theme.font.sm};
`;

export const Title = styled.h4`
    color: ${props => props.theme.color.darkScale.dark10};
    font-size: ${props => props.theme.font.xl};
`
