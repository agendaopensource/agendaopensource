const dotenv = require('dotenv');
const fetchEventbriteEvents = require('./EventBriteFetcher');
const fetchMeetupEvents = require('./MeetupFetcher');

dotenv.config();

const eventbriteToken = process.env.EVENTBRITE_TOKEN;
const eventbriteOrganizers = process.env.EVENTBRITE_ORGANIZERS.split(',');
const meetupKey = process.env.MEETUP_KEY;
const meetupGroups = process.env.MEETUP_GROUPS.split(',');

(async () => {
  // To allow await usage
  const [eventbrite, meetup] = await Promise.all([
    fetchEventbriteEvents(eventbriteToken, eventbriteOrganizers),
    fetchMeetupEvents(meetupKey, meetupGroups),
  ]);
  console.log("Here", eventbrite, "########################################## meetup", meetup);
  const events = []
    .concat(eventbrite, meetup)
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  console.log(events);
  return events;
})();


/*
eventBrite.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});
*/
