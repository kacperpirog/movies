import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
// import { StyledH1 } from "./StyledTest";
// import { Link } from "react-router-dom";

// const StyledLink = styled(Link)``;

const StyledH1 = styled.h1`
  /* color: ${(props) => (props.isYellow ? "yellow" : "blue")}; */

  /* color: ${({ isYellow }) => (isYellow ? "yellow" : "blue")}; */

  /* color: ${({ isYellow, isGreen, isRed }) =>
    isYellow ? "yellow" : isRed ? "red" : isGreen ? "green" : "blue"}; */

  color: ${({ color = "blue" }) => color};

  font-size: 40px;
  padding: 10px;

  @media (max-width: 424px) {
    color: blueviolet;
  }

  ${({ diff }) =>
    diff &&
    css`
      font-size: 100px;
      padding: 50px;
      text-decoration: underline;

      @media (max-width: 424px) {
        color: steelblue;
      }
    `}
`;

const StyledH1Plus = styled(StyledH1)`
  text-decoration: underline;
  padding: 100px;
  /* font-size: 100px; */
`;

const Test = () => {
  // state = {
  //   counter: 0
  // text: 'abc'
  // }

  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("abc");
  const [movies, setMovies] = useState([]);

  // componentDidMount() {
  //   addCounter()
  // }
  // mount
  // useEffect(() => {
  //   addCounter();
  // }, []);

  // update
  useEffect(() => {
    addCounter();
  }, [text]);

  const addCounter = () => {
    setCounter(counter + 1);
    // setText("inny tekst");
  };

  const minusCounter = () => {
    setCounter(counter - 1);
  };

  const changeText = () => {
    setText(text + "X");
  };

  // addCounter = () => {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // };

  // minusCounter = () => {
  //   this.setState({
  //     counter: this.state.counter - 1,
  //   });
  // };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={minusCounter}>-</button>
      <button onClick={addCounter}>+</button>
      <button onClick={changeText}>add x to text</button>
      h1
      <h1>Normal h1</h1>
      <h1>{text}</h1>
    </div>
  );
};

export default Test;
