import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import SuggestedCourses from "./components/MainComponents/SuggestedCourses";
import ChosenCourses from "./components/MainComponents/ChosenCourses";
import SearchBar from "./components/SearchComponents/SearchBar";
import SearchRender from "./components/SearchComponents/SearchRender";
import Footer from "./components/FooterComponents/Footer";
import Messages from "./components/MessageComponents/Messages";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Messages />
            <SearchBar />
            <SearchRender />
            <SuggestedCourses />
            <ChosenCourses />
          </>
        ),
      },
      {
        path: "/myCourses",
        element: (
          <>
            <Messages />
            <ChosenCourses />
          </>
        ),
      },
      {
        path: "/suggested",
        element: (
          <>
            <Messages />
            <SuggestedCourses />
          </>
        ),
      },
      {
        path: "/search",
        element: (
          <>
            <Messages />
            <SearchBar />
            <SearchRender />
          </>
        ),
      },
      {
        path: "/contactUs",
        element: (
          <>
            <Messages />
            <Footer />
          </>
        ),
      },
    ],
  },
]);

export default router;
