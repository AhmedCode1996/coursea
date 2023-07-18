import { styled } from "styled-components";
import { COLORS } from "../constants";
import Header from "./../components/Header/Header";
import Sidebar from "./../components/Sidebar/Sidebar";
import MainContent from "./../components/MainContent/MainContent";

const AppLayoutContent = () => {
  return (
    <Wrapper>
      <Sidebar />
      <HeaderAndContentWrapper>
        <Header />
        <MainContent />
      </HeaderAndContentWrapper>
    </Wrapper>
  );
};

export default AppLayoutContent;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${265 / 16}rem 1fr;
  background-color: ${COLORS.neutral.lightGrey};
  gap: 8px;
`;

const HeaderAndContentWrapper = styled.div`
  padding: 1rem;
`;
