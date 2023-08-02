import styled from "styled-components"

export const UserMenuStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const ButtonLogOutStyled = styled.button`
    font-size: 12px;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 4px;
    text-transform: uppercase;
    background: #deb887;
    color: black;

  &:hover {
    background: rgb(255 107 96);
    color: #1ab188;
    cursor: pointer;
}
`