import { Notification, Switcher, Search } from "@carbon/icons-react";
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderName,
} from "carbon-components-react";

import "./navbar.scss";

const Navbar = () => {
  return (
    <Header aria-label="IBM Platform Name" className={'navbar'}>
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="Search"
          color="#fff"
          // onClick={action("search click")}
        >
          <Search size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Notifications"
          color="#fff"
          // onClick={action("notification click")}
        >
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="App Switcher"
          color="#fff"
          // onClick={action("app-switcher click")}
          tooltipAlignment="end"
        >
          <Switcher size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default Navbar;
