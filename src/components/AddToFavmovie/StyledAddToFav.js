import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;  
    padding: 1rem;
    flex-wrap: wrap;
    background: #fff;
    margin: 1rem;
    border-radius: 1rem;
  }
  li{
    max-width: 12rem;
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
  h3{
    height: 2rem;
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
  width: 7rem;
  height: 3rem;

  &:hover {
    transform: scale(0.9);
    transition-duration: 0.4s;
  }
`;

export const StyledDivButton = styled.div`
  height: 3rem;
  margin-top: 3rem;
`;
