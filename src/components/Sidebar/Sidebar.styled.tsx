import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 100vh;
  left: 0;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.bgLight};
`;

export const Content = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  a {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  svg {
    width: 30px;
    fill: ${({ theme, active }) =>
      active ? theme.colors.highlight : theme.colors.accent};
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.highlight};
    }
  }
  img {
    width: 30px;
    color: ${({ theme, active }) =>
      active ? theme.colors.highlight : theme.colors.accent};
  }
`;
