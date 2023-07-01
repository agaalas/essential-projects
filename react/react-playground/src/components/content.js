import { useContext } from "react";
import FeedbackList from "./feedback-list";
import Navbar from "./navbar";
import NoFeedback from "./no-feedback/no-feedback";
import { FeedbackContext } from "./context/context";

function Content() {
   const{productDataRequests}=useContext(FeedbackContext)
  return (
    <div className="right-side">
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
