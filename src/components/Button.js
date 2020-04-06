import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  transition: all 0.5s;
  text-align: center;
  padding-left: 7px;
  text-decoration: none;
`

const Box = styled.div`
  color: #FFF;
  transition: all 0.3s;
  position: relative;
  width: 250px;
  margin-left: 5px;
  &:before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 250px;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(255,255,255,0.5);
    border-bottom-color: rgba(255,255,255,0.5);
    transform: scale(0.1, 1);
  }
  &:hover:before{
    opacity: 1; 
    transform: scale(1, 1); 
  }
  &:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 250px;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(255,255,255,0.1);
  }
  &:hover:after{
    opacity: 0; 
    transform: scale(0.1, 1);
  }
  &:hover ${Text}{
    letter-spacing: 2px;
  }
`

const Button = (props) => {
  const { onClick, children } = props;
  return (<Box onClick={onClick}> <Text>{ children }</Text> </Box>);
}

export default Button;

