import React from 'react';
import dotenv from 'dotenv';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import moment from 'moment';
import theme from './src/theme';

// Data
import events from './_data/events.json';

dotenv.config();

export default {
  siteRoot: process.env.SITE_ROOT || 'http://localhost:8080/',
  getSiteData: () => ({
    analytics: process.env.SITE_ANALYTICS || '',
  }),
  getRoutes: async () => {
    const posts = [];

    const tailoredEvents = events
      .filter(event => moment(event.endDate).isAfter())
      .map((eventObj, index) => {
        const event = eventObj;
        event.uniqId = index;
        return event;
      });

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          events: tailoredEvents,
        }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
          events: tailoredEvents,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ];
  },
  renderToHtml: (render, Comp, meta) => {
    const metaUpdated = meta;
    const sheetsRegistry = new SheetsRegistry();
    const muiTheme = createMuiTheme(theme);
    const generateClassName = createGenerateClassName();
    const html = render((
      <JssProvider
        registry={sheetsRegistry}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={muiTheme} sheetsManager={new Map()}>
          <Comp />
        </MuiThemeProvider>
      </JssProvider>));

    metaUpdated.jssStyles = sheetsRegistry.toString();
    return html;
  },

  Document: ({
    Html, Head, Body, children, renderMeta,
  }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        {children}
        <style id="jss-server-side">{renderMeta.jssStyles}</style>
      </Body>
    </Html>
  ),
};
