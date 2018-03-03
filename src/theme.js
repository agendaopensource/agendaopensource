import { red } from 'material-ui/colors';

const fontWeightMedium = 300;
const fontWeightSmall = 500;
export default {
  typography: {
    // Use the system font.
    fontFamily:
      '-apple-system,system-ui,BlinkMacSystemFont,' +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    fontWeightSmall,
    body1: {
      fontWeight: fontWeightMedium,
    },
    button: {
      fontWeight: fontWeightMedium,
    },
  },
  palette: {
    primary: {
      light: red[100],
      main: red[300],
      dark: red[700],
    },
    accent: red,
    type: 'light',
    background: {
      appBar: red[300],
    },
  },
};
