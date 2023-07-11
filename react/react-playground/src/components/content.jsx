import { useContext } from "react";
import FeedbackList from "./feedback-list";
import Navbar from "./navbar";
import NoFeedback from "./no-feedback/no-feedback";
import { FeedbackContext } from "./context/context";
import styled from "styled-components";


function Content() {
   const{productDataRequests}=useContext(FeedbackContext)
  return (
    <div>
      <Navbar requests={productDataRequests} />
      {productDataRequests.length > 0 ? (
        <FeedbackList
          requests={productDataRequests}
          upvoteRequest={productDataRequests}
        />
      ) : (
        <NoFeedback />
      )}
    </div>
  );
}
export default Content;
