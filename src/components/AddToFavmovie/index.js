import React, { useContext } from "react";
import AppContext from "../../Context";
import { StyledButton, StyledDiv, StyledDivButton } from "./StyledAddToFav";

const AddToFavmovie = () => {
  const context = useContext(AppContext);

  return (
    <StyledDiv>
      <ul>
        {context.favMovies.map((addToFavMovies) => {
          const { id, poster_path, title } = addToFavMovies;
          return (
            <>
              <li>
                <img src={`${context.baseImgUrl}${poster_path}`} alt={title} />
                <h3>{title}</h3>
                <StyledDivButton>
                  <StyledButton onClick={() => context.deleteFavMovies(id)}>
                    <span>delete</span>
                  </StyledButton>
                </StyledDivButton>
              </li>
            </>
          );
        })}
      </ul>
    </StyledDiv>
  );
};
export default AddToFavmovie;
