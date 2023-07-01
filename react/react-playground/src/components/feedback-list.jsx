
import { useContext } from "react";
import Feedback from "./feedback";
import { FeedbackContext } from "./context/context";

function FeedbackList() {
  const{productDataRequests,upvoteRequest}=useContext(FeedbackContext)
  return (

    <div className="feedback-applications">
      {productDataRequests.map((request) => {
        const {id:requestId, title, category, upvotes, description} = request
        return (
          <Feedback
            key={requestId}
            id={requestId}
            title={title}
            category={category}
            upvotes={upvotes}
            description={description}
            upvoteRequest={upvoteRequest}
          />
        );
      })}
    </div>
  );
}
export default FeedbackList;
