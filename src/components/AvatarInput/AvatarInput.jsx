/* eslint-disable react/prop-types */
import { useEffect, useId, useState } from "react";
import { styled } from "styled-components";

import { COLORS, TYPOGRAPHY } from "../../constants";
import { useDispatch } from "react-redux";
import { setAvatar } from "../../features/user/userSlice";
import AnimatedIcon from "./../AnimatedIcon/AnimatedIcon";

import successUpload from "./../../assets/avatarSuccess.json";

function AvatarInput(props) {
  const [photoUrl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();
  const id = useId();
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    /*
      https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static
    */
    setPhotoUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    dispatch(setAvatar(photoUrl));
  }, [photoUrl, dispatch]);

  return (
    <Wrapper>
      <Label htmlFor={`input${id}`}>{props.children}</Label>
      <Input
        id={`input${id}`}
        type="file"
        name="avatar"
        onChange={handleAvatarChange}
      />

      <span
        style={{ visibility: `${photoUrl.length > 0 ? "visible" : "hidden"}` }}
      >
        <AnimatedIcon icon={successUpload} />
      </span>
    </Wrapper>
  );
}

export default AvatarInput;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px dashed ${COLORS.primary};
  border-radius: 8px;
  padding: 0.5rem;
  position: relative;
`;
const Label = styled.label`
  font-weight: 500;
  font-size: ${TYPOGRAPHY.base};
  text-transform: capitalize;
  text-align: center;
`;

const Input = styled.input`
  position: absolute;
  inset: 0;
  visibility: hidden;
`;
