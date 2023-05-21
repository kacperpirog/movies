import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
 
  ul {
    display: flex;
    justify-content: center;  
    flex-wrap: wrap;
    border-radius: 1rem;
  }
  li{
    max-width: 20rem;
    margin: 1rem;
    color: #000
    text-align: center
  }
  img{
     
    width: 12rem;
    border-radius: 1rem;
    box-shadow: rgb(0 0 0 / 75%) 0px 7px 15px -2px;
    &:hover {
    transform: scale(0.9);
    transition-duration: 0.9s;
  }
  }
  div{
    position: relative;
  }

  h5 {
    font-size: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 10vw;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const StyledButton = styled.button`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  width: 3rem;
  height: 3rem;
  &:hover {
    transform: scale(0.9);
    background-color: #df1754;
    transition-duration: 0.4s;
    color: #fff;
    &::before {
    }
  }
`;

export const StyledDivButton = styled.div`
  position: absolute;
  bottom: 4rem;
  right: -8rem;
`;
