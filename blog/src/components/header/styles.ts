import styled from "styled-components";

export const Header = styled.header`
    width: 100vw;
    height: 250px;
    padding: 41px 0;
    background: linear-gradient(88deg, #574AE8 0%, #3EA1DB 100%);
`;

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 900px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 auto;
`;

export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.font.lg};
    color: ${props => props.theme.color.darkScale.dark40};
`;