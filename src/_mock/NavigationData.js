import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import { ReactComponent as PlaylistIcon } from '../assets/icons/play-list.svg';
import { ReactComponent as ListIcon } from '../assets/icons/list.svg';
import { ReactComponent as LaterIcon } from '../assets/icons/watch-later.svg';
import { ReactComponent as HeartIcon } from '../assets/icons/heart.svg';
import { ReactComponent as CogsIcon } from '../assets/icons/cogs.svg';
import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';

export const NavData = [
     {
          name: 'Home',
          icon: <HomeIcon />
     },
     {
          name: 'Discover',
          icon: <SearchIcon />
     },
     {
          name: 'Categories',
          icon: <PlaylistIcon />
     },

     {
          name: 'My List',
          icon: <ListIcon />
     },
     {
          name: 'Save for Later',
          icon: <LaterIcon />
     },
     {
          name: 'Recomended',
          icon: <HeartIcon />
     },
     {
          name: 'Settings',
          icon: <CogsIcon />
     },
     {
          name: 'Logout',
          icon: <LogoutIcon />
     }
];
