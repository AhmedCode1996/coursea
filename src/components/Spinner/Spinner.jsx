import { styled } from "styled-components";
import loader from "./../../assets/loading.gif";
import { COLORS } from "./../../constants";
function Spinner() {
  return (
    <Wrapper>
      <Content>
        <img src={loader} title="loading spinner" />
        <p>Loading courses....</p>
      </Content>
    </Wrapper>
  );
}

export default Spinner;

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${COLORS.transparent.black10};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div``;
