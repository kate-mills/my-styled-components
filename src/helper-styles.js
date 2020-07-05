export const transition = "transition: all .5s ease-in-out;";

export const setColor = {
  mainWhite: "#ffffff",
  mainBlack: "#222",
  mainGrey: "#a19996",
  lightGrey: "#d3d3d3",
  mccPink: "#ff655d", //mccPink
}

export const screen = {
  phone: { 
    phone:(...args)=>{ return `@media (min-width: 320px) and (max-width: 480px){${args};};`},
  },
  tablet: {
       small: (...args)=>{return`@media(min-width:481px) and (max-width: 767px){${args};};`},
    landscape:(...args)=>{return`@media(min-width:768px) and (max-width:1024px) and (orientation:landscape){${args};};`},
    portrait: (...args)=>{return`@media(min-width:768px) and (max-width:1024px){${args};};`},

    tablet: (...args)=>{return`
        @media(min-width:481px) and (max-width: 767px){${args};};
        @media(min-width:768px) and (max-width:1024px) and (orientation:landscape){${args};};
        @media(min-width:768px) and (max-width:1024px){${args};};
    `},
  },
  desktop: {
    small: (...args)=>{ return`@media (min-width: 1025px) and (max-width:1280px){${args};};`},
    desktop:(...args)=>{ return`
        @media (min-width: 1025px) and (max-width: 1280px) {${args};};
        @media (min-width: 1281px){${args};};
      `},
  }
};

export const setFont = {
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
