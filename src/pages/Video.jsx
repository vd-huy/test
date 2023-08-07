import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { styled } from "styled-components";

const Container = styled.div``;
const Desc = styled.p``;
function Video() {
  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  const [status, setStatus] = useState("");
  useEffect(() => {
    if (videoConstraints.facingMode === "user") {
      setStatus(" Front");
    }
  }, []);

  return (
    <Container>
      <Desc>
        Camera:
        <span>{status}</span>
      </Desc>
      <Webcam videoConstraints={videoConstraints}></Webcam>
    </Container>
  );
}

export default Video;
