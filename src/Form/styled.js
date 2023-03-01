import styled from "styled-components";

export const StyledForm = styled.form`
    border-radius: 2px;
    margin: 10px;
`;

export const StyledDiv = styled.div`
    flex-basis: 700px;
    margin: 10px;
    padding: 10px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 30px black;

`;

export const StyledHeader = styled.h1`
    text-align: center;
    color: rgb(0, 128, 128);
`;

export const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    border: none;
`;

export const StyledSpan = styled.span`
    max-width: 500px;
    width: 100%;
    display: inline-block;
    text-align: center;
    color: black;
    font-size: 22px;
`;

export const StyledInput = styled.input`
    flex-basis: 500px;
    width: 100%;
    padding: 5px;
    border: 2px solid #383535;
    border-radius: 5px;
    margin: 10px;
    text-align: center;
    margin: 0 auto;
`;

export const StyledSelect = styled.select`
    flex-basis: 500px;
    width: 100%;
    padding: 5px;
    border: 2px solid #383535;
    border-radius: 5px;
    margin: 10px;
    text-align: center;
    margin: 0 auto;
`;

export const StyledButton = styled.button`
    width: 100%;
    border: none;
    color: white;
    background-color: hsl(180, 94%, 27%);
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 22px;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.03);
    }
    &:active {
        filter: brightness(120%);
    }
`;

export const StyledParagraph = styled.p`
    text-align: center;
`;

export const StyledParagraphLoading = styled.p`
    color: teal;
    text-align: center;
;`

export const StyledParagraphFailure = styled.p`
    color: crimson;
    text-align: center;
;`