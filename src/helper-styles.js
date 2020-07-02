export const setColor = {
  mainWhite: "#ffffff",
  mainBlack: "#222",
  mainGrey: "#a19996",
  lightGrey: "#d3d3d3",
  primaryColor: "#ff655d", //mccPink
  pink: "#e87661"
}

export const setFont = {
  headerFont: "font-family: 'Montserrat', sans-serif;",
  mainFont: "font-family: 'Raleway', sans-serif;",
  proxima: "font-family: proxima-nova, sans-serif"
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

export const setBackground = ({img='https://i.imgur.com/X2oj0mu.jpg', color='rgba(0,0,0,0)'}={}) => {
  return` background: linear-gradient(${color}, ${color}), url(${img}) center/cover fixed no-repeat`;
}
