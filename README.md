Codebase of [https://agendaopensource.github.io](https://agendaopensource.github.io)


[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/agendaopensource/agendaopensource/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/agendaopensource/agendaopensource/?branch=master) 
[![Build Status](https://travis-ci.org/agendaopensource/agendaopensource.svg?branch=master)](https://travis-ci.org/agendaopensource/agendaopensource)

# Add a new event or meetup

Open an [event issue](https://github.com/agendaopensource/agendaopensource/issues/new?template=event.md&title=New%20event&labels=event), or if you feel adventurous:

- Edit the file [_data/events.json](/_data/events.json)
- Add a new object to the file keeping exactly the same structure:
```
{
    "@context": "http://schema.org",
    "@type": "Event",
    "location":{
        "@type": "Place",
        "name": "[LOCATION NAME]",
        "address": "[ADDRESS]",
        "district": "[DISTRICT]"
    },
    "name": "[NAME]",
    "startDate": "[START DATE]",
    "endDate": "[END DATE]",
    "description": "[DESCRIPTION]",
    "url": "[URL]"
}
```

# How to contribute

Feel free to contribute by suggesting [new events](/issues/new?template=event.md&title=New%20event&labels=event) or by fixing any [open issues](/issues/).  
Don't forget to follow our [code of condutct](/CODE_OF_CONDUCT.md)!

- Fork the project
- Create a descriptively named feature branch
- Add your feature
- Submit a pull request
  
If a PR contains a change to a JSON file (as e.g. in _data/ folder) please make sure that they are validated properly. 
There are online linters to help you, for instance:  
- https://jsonlint.com
- https://www.jsonschemavalidator.net

# Run this project locally

Assuming that you already have ``node`` already installed:

```
$ git clone https://github.com/agendaopensource/agendaopensource.git
$ cd agendaopensource/
$ npm install 
$ npm start
```
Then open http://localhost:3000/

# Environment variables

These are the variables that can be used in `.env` to influence behavior.  
Environment variables that are needed for development are specified in `.env.dist`  

- `UID` : To define the user id for the docker container. You should use your uid to avoid permissions issues.
- `SITE_ROOT` : Define the site base URL
- `SITE_ANALYTICS` : Analytics token
For `tools/searchevents.js`:
- `MEETUP_KEY` : To access meetup api
- `MEETUP_GROUPS` : Name of groups separated by commas
- `EVENTBRITE_TOKEN` : Token of eventbrite api
- `EVENTBRITE_ORGANIZERS` : Organizers to track, separated by commas

# Dependencies

- `react` A JavaScript library for building user interfaces
- `react-static` to generate static pages and routing 
- `redux` Predictable state container for JavaScript apps 
- `eslint` (airbnb) - to assert that best practices are followed
- `dotenv` enable environment variables usage
- `moment` to make dates easy to work 
- `axios` Promise based HTTP client for the browser and node.js

# Security
If you discover any security related issue, please email tiagompglopes@gmail.com instead of using the issue tracker.    
Check [security.txt](/security.txt) for more details.  


# ToDo:
- Review all styles (use theme constants!)  
- Improve Documentation  
- Move site urls e constants to getSiteData() and consume using withSiteData  
- Test everything!  
- PWA
