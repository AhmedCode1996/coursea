/* eslint-disable no-unused-vars */
import { setLogout } from "../features/user/userSlice";
import { supabase } from "../services/supabase";

const logout = async () => {
  let { error } = await supabase.auth.signOut();
};

const clickLogoutHandler = () => {
  logout();
  dispatch(setLogout());
  setLoggedOut(false);
  navigate("/");
};
