import styled from "styled-components";
import background from "./Background.png";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  margin-left: 100px;
  padding: 20px;
`;
