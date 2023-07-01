import { createContext } from "react";

export const FeedbackContext= createContext({
    activeCategory:"",
    productDataRequests:[],
    filterRequests:()=>{},
    upvoteRequest:()=>{}
  })
  
  