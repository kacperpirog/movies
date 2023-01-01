import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
/* font-family: ; */
overflow-x: hidden;
background: white;
background: #FFF;
  font-family: "Prompt", sans-serif;
}

ul {
    list-style: none;
}

button{
    cursor: pointer;
}

i{
    cursor: pointer;
}
h1{
    font-family: 'Prompt', sans-serif;
}
h2{
    font-family: 'Prompt', sans-serif;
}
h3{
    font-family: 'Prompt', sans-serif;
}
h4{
    font-family: 'Prompt', sans-serif;
}
h5{
    font-family: 'Prompt', sans-serif;
}
link {
    font-family: 'Prompt', sans-serif;
}
p{
    font-family: 'Prompt', sans-serif;
}

`;

export default GlobalStyles;
