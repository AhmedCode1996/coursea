/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import FollowLink from "./../FollowLink/FollowLink";
import { COLORS, TYPOGRAPHY } from "../../constants";
import { motion } from "framer-motion";

function Mentor({ image, job, name, id }) {
  return (
    <Wrapper
      drag
      dragTransition={{
        min: 0,
        max: 5,
        bounceStiffness: 20,
        bounceDamping: 4,
      }}
      transition={{ type: "spring" }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.09 },
      }}
      as={motion.div}
    >
      <Card>
        <InnerWrapper>
          <Avatar>
            <img src={image} />
          </Avatar>
          <Info>
            <Title>{name.substring(0, 5)}</Title>
            <Job>{job.substring(0, 5)}</Job>
          </Info>
        </InnerWrapper>
        <FollowLink />
      </Card>
    </Wrapper>
  );
}

export default Mentor;

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 1.5rem;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.09);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translate(2px, 4px) scale(1.04);
    transition: all 0.3s;
  }

  &:active {
    transform: translate(-2px, 4px);
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
  }
`;

const Card = styled.div`
  display: flex;
  gap: 1rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
const Avatar = styled.div`
  width: ${45 / 16}rem;
  height: ${45 / 16}rem;

  img {
    border-radius: 50%;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: ${TYPOGRAPHY.sm};
  font-weight: bold;
`;
const Job = styled.p`
  font-size: ${TYPOGRAPHY.xs};
  color: ${COLORS.neutral.darkGrey};
`;
