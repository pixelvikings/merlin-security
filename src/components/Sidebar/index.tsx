import { Icon, IconType } from "../Icon";
import { Container, Content, Menu, MenuItem } from "./Sidebar.styled";
import { Logo } from "../Logo";
import { useLocation, Link } from "react-router-dom";

const Item = ({ icon, path }: { icon: IconType; path: string }) => {
  const location = useLocation();
  console.log(location.pathname, path);
  return (
    <Link to={path}>
      <MenuItem active={location.pathname === path}>
        <Icon icon={icon} />
      </MenuItem>
    </Link>
  );
};

export const SideBar = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <Menu>
          <Item icon="home" path="/" />
          <Item icon="settings" path="/settings" />
        </Menu>
      </Content>
    </Container>
  );
};
