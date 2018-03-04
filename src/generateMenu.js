import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';
import EventIcon from 'material-ui-icons/Event';
import FaceIcon from 'material-ui-icons/Face';

export default [
  {
    id: 1,
    link: '/about',
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
    link: '/',
    label: 'Suggest event',
    icon: EventIcon,
    active: 0,
  },
];
