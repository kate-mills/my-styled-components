export const setColor = {
  mainWhite: "#ffffff",
  mainBlack: "#222",
  mainGrey: "#a19996",
  lightGrey: "#d3d3d3",
  mccPink: "#ff655d", //mccPink
}

export const setFont = {
  proximaNova: `
  font-family:proxima-nova, sans-serif;
  `
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
