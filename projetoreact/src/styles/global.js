import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
body{
    background-color: ${({ theme }) => theme.colors.background_800};
    color: ${({ theme }) => theme.colors.white};

    -webkit-font-smoorhing: antialiased;
    
    

}
border-style, input, button,textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
}
a{
    text-decoration: none;
}

button, a{
    cursor: pointer;
    transition: filter 0.2s;
}


button:hover, a:hover{
    cursor: pointer;
    transition: brightness(0.9);
}
`;
