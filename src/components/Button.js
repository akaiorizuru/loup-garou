import React from 'react';
import styled from 'styled-components';


// const Button = (props) => {
//   const { onClick, children } = props;
//   return (<button onClick={onClick}> { children }</button>);
// }

const Button = styled.button`
  width : 250px;
  height : 40px;
  color: white;
  font-size: 25;
  font-family: Arial;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 8px;
  border: none;
  text-transform: uppercase;
  background-color: #af08c2;
  &:hover {
      color: grey;
      background-color: yellow;
      };
`
// const ButtonLeft=styled.button`
// ${communStyle}
// background-color: blue;
// `
// const ButtonRight=styled.button`
// ${communStyle}
// background-color: red;
// `



export default Button;
