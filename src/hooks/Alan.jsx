import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setToggleSidebar } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import {
  categoryFilter,
  levelFilter,
  searchFilter,
  sortFilter,
} from "../features/courseSlice";
const useAlan = () => {
  const { toggleSidebar } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    alanBtn({
      key: "921af5bcb5cb04e17972efd4f21deda72e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, response }) => {
        if (command === "changeSidebar") {
          if (response === "hidden") {
            dispatch(setToggleSidebar(true));
          } else {
            dispatch(setToggleSidebar(false));
          }
        }

        if (command === "navigate") {
          if (response === "my-courses") {
            navigate(`/account/${response}`);
          } else if (response === "mentors") {
            navigate(`/account/${response}`);
          } else if (response === "overview") {
            navigate(`/account/${response}`);
          } else if (response === "explore-courses") {
            navigate(`/account/${response}`);
          } else if (response === "plans") {
            navigate(`/account/${response}`);
          }
        }

        if (command === "search") {
          navigate("/account/explore-courses");
          dispatch(searchFilter(response));
        }

        if (command === "level") {
          navigate("/account/explore-courses");
          dispatch(levelFilter({ label: response }));
        }

        if (command === "sortBy") {
          navigate("/account/explore-courses");
          const value = response.includes("title")
            ? response.replace("title ", "title: ")
            : response;
          dispatch(sortFilter({ label: value }));
        }

        if (command === "category") {
          navigate("/account/explore-courses");
          dispatch(categoryFilter({ label: response }));
        }

        if (command === "logout") {
          dispatch(setLogout(true));
        }
      },
    });
  }, [dispatch, toggleSidebar, navigate]);
};

export default useAlan;
