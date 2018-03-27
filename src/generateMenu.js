import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';
import EventIcon from 'material-ui-icons/Event';
import FaceIcon from 'material-ui-icons/Face';
import AppConfig from './AppConfig';

export default [
  {
    id: 1,
    link: '/',
    label: 'Upcoming',
    icon: LibraryBooksIcon,
    active: 0,
  },
  {
    id: 5,
    link: '/call-for-papers',
    label: 'Call for papers',
    icon: LibraryBooksIcon,
    active: 0,
  },
  {
    id: 2,
    link: '/speakers',
    label: 'Speakers',
    icon: FaceIcon,
    active: 0,
  },
  {
    id: 3,
    link: AppConfig.newEventUrl,
    label: 'Suggest event',
    target: '_blank',
    rel: 'noopener',
    icon: EventIcon,
    active: 0,
  },
];
