import { createGlobalStyle } from "styled-components";
import {setColor, setFont} from '../../helper-styles.js'

const Globals = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,600;1,200&family=Raleway:ital,wght@0,200;0,400;0,600;1,200&display=swap');

*{
 margin:0;
 padding:0;
 box-sizing:border-box;
}
body{
 background:${setColor.primaryColor};
 color:${setColor.mainBlack};
 font-size:100%;
}
body,p {${setFont.mainFont}}
h1,h2,h3,h4,h5,h6 {${setFont.headerFont}}

h1{
 font-size:3em;font-weight: 400;line-height:1.2;margin-bottom:0.5em;
}
h2{
 font-size:2em;font-weight:400;margin-bottom:0.75em
}
h3{
 font-size:1.5em;font-weight:400;line-height:1;margin-bottom:1em
}
h4{
 font-size:1.2em;line-height:1.2;margin-bottom:1.25em;font-weight:400;
}
h5{
 font-size:1em;margin-bottom:1.5em;font-weight:bold;
}
h6{
 font-size:1em;font-weight:bold;
}
p{
 line-height:1.5;margin:0 0 1.5 0;
}
`;

export default Globals;

