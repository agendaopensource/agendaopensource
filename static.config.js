import React from 'react';
import dotenv from 'dotenv';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from 'material-ui/styles';
import moment from 'moment';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import theme from './src/theme';

// Data
import events from './_data/events.json';
import callForPapers from './_data/callforpapers.json';

dotenv.config();

export default {
  siteRoot: process.env.SITE_URL || 'http://localhost:3000/',
  getSiteData: () => ({
    analytics: process.env.SITE_ANALYTICS || '',
    googleSearchConsoleToken: process.env.GOOGLE_SEARCH_CONSOLE_TOKEN || '',
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
    const frequentCallForPapers = callForPapers.frequent;
    const sporadicCallForPapers = callForPapers
      .sporadic
      .filter(cfp => moment(cfp.deadline).isAfter());

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          events: tailoredEvents,
        }),
      },
      {
        path: '/speakers',
        component: 'src/containers/Speakers',
      },
      {
        path: '/call-for-papers',
        component: 'src/containers/CallForPapers',
        getData: () => ({
          frequentCallForPapers,
          sporadicCallForPapers,
        }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
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
        <title>Open Agenda</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        {children}
        <style id="jss-server-side" dangerouslySetInnerHTML={{__html: renderMeta.jssStyles}} />
      </Body>
    </Html>
  ),
  webpack: (config, { defaultLoaders, stage }) => {
    config.resolve.extensions.push('.css');
    config.resolve.extensions.push('.scss');
    config.resolve.extensions.push('.sass');
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use:
              stage === 'dev'
                ? [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
                : ExtractTextPlugin.extract({
                  use: [
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                    },
                  },
                  {
                    loader: 'sass-loader',
                    options: { includePaths: ['src/'] },
                  },
                  ],
                }),
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
        },
      ];
      return config;
  },
};
