import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import AppLayout from "./ui/AppLayout";
import AppLayoutContent from "./ui/AppLayoutContent";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import GlobalStyle from "./styles/GlobalStyles";
import CourseProvider from "./hooks/CourseProvider";

import Course from "./pages/Course";
import MainContent from "./components/MainContent/MainContent";
import MyCourses from "./pages/MyCourses";
import Overview from "./pages/Overview";
import Mentors from "./components/Mentors/Mentors";
import Plans from "./pages/Plans";
import Courses from "./components/Courses/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "account",
    element: <AppLayoutContent />,
    children: [
      {
        index: true,
        element: <MainContent />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "explore-courses",
        element: <Courses />,
      },
      {
        path: "mentors",
        element: <Mentors />,
      },
      {
        path: "plans",
        element: <Plans />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: ":courseid",
        element: <Course />,
      },
    ],
  },
]);

const root = document.getElementById("root");

createRoot(root).render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <CourseProvider>
        <RouterProvider router={router} />
      </CourseProvider>
    </Provider>
  </>
);
