import styled from "styled-components";

export const StyledDivPaginations = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  padding: 1rem;
  color:#000;
  
  h2 {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  button {
    position: relative;
    overflow: hidden;
    border: 0;
    height: 3rem;
    width: 9rem;
    box-shadow: inset 0 0 0 1px #000;
    :before,
    :after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      h4{ 
        color: #000
      }
    }
    :before {
      background: #000;
      border: 1px solid #e0d0b0;
      transform: translate3d(-100%, 0, 0);
      transition: transform 0.3s ease-in;
     
    }
    :after {
      background: #fff;
      color: #000
      border: 1px solid #fff;
      transform: translate3d(100%, 0, 0);
      transition: transform 0.25s ease-out 0.29s;
     
    }
    span {
    position: relative;
    z-index: 10;
  }

    :hover {
      :before,
      :after {
        transform: translate3d(0, 0, 0);
    
      }
    }
  }
`;
