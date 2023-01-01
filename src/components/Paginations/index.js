import React, { useContext } from "react";
import AppContext from "../../Context";
import { StyledDivPaginations } from "./styledPaginations";

const Paginations = () => {
  const context = useContext(AppContext);
  const { goBackPage, page, goNextPage, lastPage } = context;
  return (
    <StyledDivPaginations>
      <button onClick={goBackPage} disabled={page === 1 ? true : false}>
        <span>GO PREV PAGE</span>
      </button>
      <h2>{page}</h2>
      <button onClick={goNextPage} disabled={page === lastPage ? true : false}>
        <span>GO NEXT PAGE</span>
      </button>
    </StyledDivPaginations>
  );
};

export default Paginations;
