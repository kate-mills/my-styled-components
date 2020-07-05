import { createGlobalStyle } from "styled-components";
import {setColor, setFontFamily, setFontSize} from '../../helper-styles.js'

const Globals = createGlobalStyle`
*{
 margin:0;
 padding:0;
 box-sizing:border-box;
}
body{
 background:${setColor.mainWhite};
 color:${setColor.mainBlack};
 ${setFontFamily.proximaNova};
 ${setFontSize(15, 17)}
 line-height: 1.8em;
 background-color:rgba(255, 102, 104, 1);
}
h1{
 font-weight:300;line-height:1.2;margin-bottom:0.5em;
}
h2{
 font-weight:400;margin-bottom:0.75em;
}
h3{
 font-weight:400;line-height:1;margin-bottom:1em;
}
h4{
 line-height:1.2;margin-bottom:1.25em;font-weight:400;
}
h5{
 margin-bottom:1.5em;font-weight:bold;
}
h6{
 font-weight:bold;
}
p{
 line-height:1.5;margin:0 0 1.5 0;
}
`;
export default Globals;
