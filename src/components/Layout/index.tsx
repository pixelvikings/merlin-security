import React from "react";
import { Container, Content } from "./Layout.styled";
import { SideBar } from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <SideBar />
      <Content>{children}</Content>
    </Container>
  );
};
