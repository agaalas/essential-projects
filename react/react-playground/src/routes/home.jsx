import { useContext, useEffect } from "react";

import "../App.css";

import Button from "../components/button";
import Content from "../components/content";
import Sidebar from "../components/sidebar-folder/sidebar";
import { FeedbackContext } from "../components/context/context";
import { AuthContext } from "../components/context/auth-context";

function Home() {
  const {
    activeCategory,
    productDataRequests,
    filterRequests,
    upvoteRequest,
    setActiveCategory,
    getData
  } = useContext(FeedbackContext);
  const {token} = useContext(AuthContext);
  useEffect(() => {
    getData();
  }, [token]);

  return (
    <div className="product-feedback container">
      <div className="product-page">
        <Sidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          filterRequests={filterRequests}
          productDataRequests={productDataRequests}
        />
        <Content requests={productDataRequests} upvoteRequest={upvoteRequest} />
      </div>

      <Button content="edit feedback" variant="blue" />
      <Button content="add feedback" variant="black" />
      <Button content="share feedback" variant="beige" />
    </div>
  );
}

export default Home;
