import { useContext } from "react";
import Roadmap from "./roadmap.js/roadmap";
import SidebarCategories from "./sidebar-category/sidebar-categories";
import { FeedbackContext } from "../context/context";

function Sidebar(props) {
  const{filterRequests}=useContext(FeedbackContext)
 
  return (
    <div className="left-side">
      <div className="frontend-mentor">
        <h2 className="mentor">Frontend Mentor</h2>
        <h3 className="feedback-board">Feedback Board</h3>
      </div>
      <SidebarCategories
        activeCategory={props.activeCategory}
        setActiveCategory={props.setActiveCategory}
        filterRequests={filterRequests}
      />
      <Roadmap
        activeCategory={props.activeCategory}
        setActiveCategory={props.setActiveCategory}
        filterRequests={props.filterRequests}
        productDataRequests={props.productDataRequests}
        setProductDataRequests={props.setProductDataRequests}
      />
    </div>
  );
}

export default Sidebar;
