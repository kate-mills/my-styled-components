export const transition = "transition: all .5s ease-in-out;";

export const setColor = {
  mainWhite: "#ffffff",
  mainBlack: "#222",
  mainGrey: "#a19996",
  lightGrey: "#d3d3d3",
  mccPink: "#ff655d", //mccPink
  h2: "rgba(179,0,0,0.8)",
}

export const setFontSize = ({min_font=15, max_font=24, min_vw=300, max_vw=1600}={}) => { 
  return `font-size:calc(${min_font+"px"} + (${max_font} - ${min_font}) * ((100vw - ${min_vw+"px"}) / (${max_vw} - ${min_vw})));`
};

export const setFontFamily = {
  proximaNova: `font-family:proxima-nova, sans-serif;`
}

//flex-start flex-end
export const setFlex = ({x="center", y="center"}={}) => {
  return `display:flex;justify-content:${x};align-items:${y};`
}

export const setImg = ({src}) => {
  let img = new Image();
  img.setAttribute("SameSite", "None")
  img.setAttribute('crossOrigin', 'anonymous')
  img.src = src;
  return img;
}

export const setBackground = ({img='', color='rgba(0,0,0,0)'}={}) => {
  return` background: linear-gradient(${color}, ${color}), url(${img}) center/cover fixed no-repeat`;
}
