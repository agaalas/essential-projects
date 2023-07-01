import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/router";
import FeedbackProvider from "./providers/feedback-provider";
import AuthProvider from "./providers/auth-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <FeedbackProvider>
      <Router />
    </FeedbackProvider>
  </AuthProvider>
);
