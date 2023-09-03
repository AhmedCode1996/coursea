import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggleSidebar } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
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
            navigate("/account/my-courses");
          }
        }
      },
    });
  }, [dispatch, toggleSidebar, navigate]);
};

export default useAlan;
