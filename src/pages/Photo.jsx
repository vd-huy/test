import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputFile = styled.input``;

function Photo() {
  const [imagesrc, setImagesrc] = useState(require("../image/test.png"));
  const handleChang = (e) => {
    setImagesrc(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Container>
      <InputFile type="file" accept=".png, .jpg" onChange={handleChang} />
      <img src={imagesrc} />
    </Container>
  );
}

export default Photo;
