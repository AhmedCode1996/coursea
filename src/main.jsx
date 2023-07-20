import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";

import AppLayout from "./ui/AppLayout";
import AppLayoutContent from "./ui/AppLayoutContent";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import GlobalStyle from "./styles/GlobalStyles";
import CourseProvider from "./hooks/CourseProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/account",
    element: <AppLayoutContent />,
    children: [
      {
        index: true,
        // element:<Overview />,
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
