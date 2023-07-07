import { useContext } from "react";
import FeedbackList from "./feedback-list";
import Navbar from "./navbar";
import NoFeedback from "./no-feedback/no-feedback";
import { FeedbackContext } from "./context/context";
import styled from "styled-components";

const SConten=styled.div`

`

function Content() {
   const{productDataRequests}=useContext(FeedbackContext)
  return (
    <SConten>
      <Navbar requests={productDataRequests} />
      {productDataRequests.length > 0 ? (
        <FeedbackList
          requests={productDataRequests}
          upvoteRequest={productDataRequests}
        />
      ) : (
        <NoFeedback />
      )}
    </SConten>
  );
}
export default Content;
