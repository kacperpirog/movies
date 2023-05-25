import styled from "styled-components";

export const StyledDivPaginations = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  padding: 1rem;
  color: #000;

  h2 {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  button {
    width: 8rem;
    height: 2rem;
    border-color: #df1754;
    color: #fff;
    box-shadow: 0 0 40px 40px #df1754 inset, 0 0 0 0 #df1754;
    transition: all 150ms ease-in-out;

    &:hover {
      width: 8rem;
      height: 2rem;
      border-color: #000;
      background: #fff;
      color: #df1754;
      box-shadow: 0 0 40px 40px #fff inset, 0 0 0 0 #fff;
      transition: all 150ms ease-in-out;
    }
  }
`;
