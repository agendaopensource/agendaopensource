import AppConfig from './AppConfig';

export default [
  {
    id: 1,
    link: '/',
    label: 'Upcoming',
    active: 0,
  },
  {
    id: 2,
    link: '/call-for-papers',
    label: 'Call for papers',
    active: 0,
  },
  {
    id: 3,
    link: '/speakers',
    label: 'Speakers',
    active: 0,
  },
  {
    id: 4,
    link: AppConfig.newEventUrl,
    label: 'Suggest event',
    target: '_blank',
    rel: 'noopener',
    active: 0,
  },
];
