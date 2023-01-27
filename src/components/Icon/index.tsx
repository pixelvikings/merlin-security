import { ReactComponent as HomeSVG } from "./Home.svg";
import { ReactComponent as GearSVG } from "./Gear.svg";

const icons = {
  settings: GearSVG,
  home: HomeSVG,
};

export type IconType = "home" | "settings";

type Props = {
  icon: IconType;
  className?: string;
};

export const Icon: React.FC<Props> = ({ icon, className }) => {
  const Component = icons[icon];
  if (Component) {
    return <Component className={className} />;
  } else {
    return null;
  }
  //   return <img alt="icon" src={icons[icon]} className={className} />;
};
