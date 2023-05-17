import React from "react";
import { data } from "../data/data.js";
import RecomenedMovies from "./recomened-movies.jsx";
import styled from "styled-components";

const SRecomenedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1240px;
`;

function RecomenedList() {
  return (
    <SRecomenedContainer>
      {data.map((request) => {
        return (
          <RecomenedMovies
            year={request.year}
            category={request.category}
            rating={request.rating}
            title={request.title}
            img={request.thumbnail.regular.medium}
          />
        );
      })}
    </SRecomenedContainer>
  );
}

export default RecomenedList;
