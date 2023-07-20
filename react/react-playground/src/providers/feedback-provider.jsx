import React, { useContext, useEffect, useState } from "react";
import { FeedbackContext } from "../components/context/context";
import axios from "axios";
import { AuthContext } from "../components/context/auth-context";

function FeedbackProvider(props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [productDataRequests, setProductDataRequests] = useState([]);
  const { token } = useContext(AuthContext);

  function filterRequests(newCategory) {}

  function upvoteRequest(productId) {}

  async function getData() {
    console.log("hello");
    let data;
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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

  return (
    <FeedbackContext.Provider
      value={{
        activeCategory,
        productDataRequests,
        filterRequests,
        upvoteRequest,
        setActiveCategory,
        getData,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackProvider;
