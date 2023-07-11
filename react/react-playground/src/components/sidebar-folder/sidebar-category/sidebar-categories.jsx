import "./sidebar-categories-style.css";
import styled from "styled-components";

const SCategories = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 255px;
  padding: 24px 50px 24px 24px;
  margin-bottom: 24px;
  height: 166px;
`;
const SCategoryActive = styled.div`
  background-color: #4661e6;
  color: #cfd7ff;
  pointer-events: none;
`;

function SidebarCategories(props) {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <SCategories>
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={`category ${
              props.activeCategory === category ? <SCategoryActive /> : ""
            }`}
            onClick={() => {
              props.filterRequests(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </SCategories>
  );
}

export default SidebarCategories;
