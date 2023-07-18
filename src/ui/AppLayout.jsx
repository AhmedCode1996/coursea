/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

import { QUERIES } from "../constants";

import AuthenticationPicture from "../components/AuthenticationPicture/AuthenticationPicture";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// const URL = "https://www.udemy.com/api-2.0/courses/?page=2&page_size=100";

const options = { method: "GET", headers: { accept: "application/json" } };
const AppLayout = () => {
  // const [page, setPage] = useState(0);
  // const [pageSize, setPageSize] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    // async function getData() {
    //   const data = await fetch(URL, {
    //     method: "GET",
    //     mode: "cors",
    //     credentials: "omit",
    //     headers: {
    //       Accept: "application/json, text/plain, */*",
    //       Authorization:
    //         "Basic S0wzYUI5U0JLekZTOUN5clFMT3ptcHp3RktVajB4WHJETFV1a0drTTpUQXVhM0NyM1NDODFSR01Ia0RIQXI0ZDFmTmtUeTZkNnBkcm9mZkN2ck5lSFI0akkwc01qVmY5c0l2UnZzcDgwTE1yYkF3VDJrYXJnWWpiZzMyMm5ESDBvczQ0dHFuOTNYUWwyamFVME9uREpsOXl2MU43SnhHelluR1AwY3VuRw==",
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const res = await data.json();
    //   console.log(res);
    //   setData(res);
    // }

    // getData();

   
  }, []);

  return (
    <Wrapper>
      <AuthenticationPicture />
      <AuthWrappers>
        <Outlet />
      </AuthWrappers>
    </Wrapper>
  );
};

export default AppLayout;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100dvh;
  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: 100%;
  }
`;
const AuthWrappers = styled.div``;
