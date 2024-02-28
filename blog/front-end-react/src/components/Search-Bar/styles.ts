import styled from "styled-components";

export const SearchbarContainer = styled.div`
    width: 100%;
    height: 65px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.20);
    position: relative;
    transition: all ease .2s;

    & > input:hover,
    & > input:focus {
        outline: 1px solid ${props => props.theme.color.darkScale.dark40};
        border-radius: 5px;
    }
`

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    left: 17px;
    top: 50%;
    transform: translateY(-50%);
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: text;
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 64px;
    color: ${props => props.theme.color.darkScale.dark40};
    font-size: ${props => props.theme.font.md};

    &::placeholder {
        color: ${props => props.theme.color.darkScale.dark40};
        opacity: .6;
        font-size: ${props => props.theme.font.md};
    }

    &::-webkit-input-placeholder {
        color: ${props => props.theme.color.darkScale.dark40};
        opacity: .6;
        font-size: ${props => props.theme.font.md};
    }

    &:-ms-input-placeholder {
        color: ${props => props.theme.color.darkScale.dark40};
        opacity: .6;
        font-size: ${props => props.theme.font.md};
    }
`