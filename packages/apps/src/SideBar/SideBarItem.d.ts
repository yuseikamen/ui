/// <reference types="react" />
import { NavLink } from 'react-router-dom';
declare const SideBarItem: import("styled-components").StyledComponent<import("react").ComponentClass<import("semantic-ui-react").MenuItemProps, any>, any, {
    className: string;
}, "className">;
declare const SideBarItemDivider: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const SideBarItemLink: import("styled-components").StyledComponent<"a", any, {
    className: "apps--SideBar-Item-NavLink";
}, "className">;
declare const SideBarItemNavLink: import("styled-components").StyledComponent<typeof NavLink, any, {
    className: "apps--SideBar-Item-NavLink";
    activeClassName: "apps--SideBar-Item-NavLink-active";
}, "className" | "activeClassName">;
export { SideBarItem, SideBarItemDivider, SideBarItemNavLink, SideBarItemLink };
