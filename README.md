Codebase of [https://agendaopensource.github.io](https://agendaopensource.github.io)


[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/agendaopensource/agendaopensource/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/agendaopensource/agendaopensource/?branch=master) 
[![Build Status](https://travis-ci.org/agendaopensource/agendaopensource.svg?branch=master)](https://travis-ci.org/agendaopensource/agendaopensource)

# Add a new event or meetup

Open an [event issue](https://github.com/agendaopensource/agendaopensource.github.io/issues/new?template=event.md&title=New%20event&labels=event), or if you feel adventurous:

- Edit the file [_data/events.json](https://github.com/agendaopensource/agendaopensource.github.io/blob/master/_data/events.json)
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

Feel free to contribute by suggesting [new events](https://github.com/agendaopensource/agendaopensource.github.io/issues/new?template=event.md&title=New%20event&labels=event) or by fixing any [open issues](https://github.com/agendaopensource/agendaopensource.github.io/issues/).  
Don't forget to follow our [code of condutct](https://github.com/agendaopensource/agendaopensource.github.io/blob/master/CODE_OF_CONDUCT.md)!

- Fork the project
- Create a descriptively named feature branch
- Add your feature
- Submit a pull request
  
If a PR contains a change to a JSON file (as e.g. in _data/ folder) please make sure that they are validated properly. 
There are online linters to help you, for instance:  
- https://jsonlint.com
- https://www.jsonschemavalidator.net

# Run this project locally

Assuming that you already have ``node`` and ``yarn`` already installed:

```
$ git clone https://xxx.git
$ cd jam-react/
$ yarn install 
$ yarn start
```
Then open http://localhost:3000/

# Environment variables

Environment variables that are needed for development are specified in ``.env.dist``

```
- SITE_URL: http://localhost:8080/
- SITE_ANALYTICS - Analytics
```

# Dependencies

- ``react-static``  to generate static pages and routing 
- ``eslint`` (airbnb) - to assert that good practices are followed properly
- ``material-ui`` for presentation
- ``dotenv`` to facilitate configuration using environment variables (as suggested in 12factor)
- ``moment`` to work with dates easily  


# ToDo:
[] Add helmet for SEO stuff  
[] Move all custom CSS values into theme.js  
[] Review all styles (use theme constants!)  
[] Documentation  
[] Move site urls e constants to getSiteData() and consume using withSiteData  
[] Test everything!  
[] PWA/AMP  

# Documentation
- Airbnb lint
- Material UI
- react-static
- .env support (12factor - III)



