import "./sidebar-categories-style.css";

function SidebarCategories(props) {
  

  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={`category ${
              props.activeCategory === category ? "category--active" : ""
            }`}
            onClick={() => {
              props.filterRequests(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default SidebarCategories;
