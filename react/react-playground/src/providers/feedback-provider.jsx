import React, { useEffect, useState } from "react";
import { FeedbackContext } from "../components/context/context";
import axios from "axios";

function FeedbackProvider(props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [productDataRequests, setProductDataRequests] = useState([]);

  function filterRequests(newCategory) {}

  function upvoteRequest(productId) {}

  useEffect(() => {
    async function getData() {
      let data;
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODc3Yzg3M2ZlNjY2Y2E0ZTFjOTUwNyIsImlhdCI6MTY4NjY4MjIwMSwiZXhwIjoxNjk0NDU4MjAxfQ.i1aSRJVpc0FD-z3o_hVmwE0XrqK7zPWTEDwOwJd58T0`,
          "Content-Type": `application/json`,
        },
      };
      try {
        data = await axios.get(
          `https://tutorial-apis.herokuapp.com/api/v1/feedbacks`,
          config
        );
        setProductDataRequests(data.data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <FeedbackContext.Provider
      value={{
        activeCategory,
        productDataRequests,
        filterRequests,
        upvoteRequest,
        setActiveCategory,

      }}
    >{props.children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackProvider;