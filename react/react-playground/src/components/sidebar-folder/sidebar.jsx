import { useContext } from "react";
import Roadmap from "./roadmap.js/roadmap";
import SidebarCategories from "./sidebar-category/sidebar-categories";
import { FeedbackContext } from "../context/context";
import { AuthContext } from "../context/auth-context";
import styled from "styled-components";

const SLeftSide = styled.div`
  margin-right: 30px;
`;
const SMentor = styled.h2`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.25px;
  color: #ffffff;
`;
const SFeedbackBord = styled.h2`
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
`;
const SLogOut = styled.button`
  background: #f2f4ff;
  border-radius: 10px;
  padding: 5px 16px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661e6;
  margin-bottom: 14px;
  margin-right: 8px;
  display: inline-block;
  cursor: pointer;
  border: none;
  background: #ffffff;
  border-radius: 10px;
  padding: 12px 25px;
  margin-top: 24px;
  width: 100%;
`;
const SFrontedMentor = styled.div`
  background: radial-gradient(
      128.88% 128.88% at 103.9% -10.39%,
      #e84d70 0%,
      #a337f6 53.09%,
      #28a7ed 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border-radius: 10px;
  padding: 62px 78px 24px 24px;
  margin-bottom: 24px;
`;

function Sidebar(props) {
  const { filterRequests } = useContext(FeedbackContext);
  const { logout } = useContext(AuthContext);

  return (
    <SLeftSide>
      <SFrontedMentor>
        <SMentor>Frontend Mentor</SMentor>
        <SFeedbackBord>Feedback Board</SFeedbackBord>
      </SFrontedMentor>
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
      <SLogOut onClick={logout}>Log out</SLogOut>
    </SLeftSide>
  );
}

export default Sidebar;
