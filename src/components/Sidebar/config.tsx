import React from "react";

import {SidebarTyped} from "./typed";
import {HomeIcon, InterestIcon, MessengerIcon, SearchIcon} from "components/icons";

export const menuLinks: SidebarTyped[] = [
    {path: '/', text: 'Home', Icon: <HomeIcon/>},
    {path: '/messages', text: 'Messages', Icon: <MessengerIcon/>},
    {path: '/search', text: 'Search', Icon: <SearchIcon/>},
    {path: '/interesting', text: 'Interesting', Icon: <InterestIcon/>},
];