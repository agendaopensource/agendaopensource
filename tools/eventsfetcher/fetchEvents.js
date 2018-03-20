const dotenv = require('dotenv');
const fetchEventbriteEvents = require('./EventBriteFetcher');
const fetchMeetupEvents = require('./MeetupFetcher');

dotenv.config();

const eventbriteToken = process.env.EVENTBRITE_TOKEN;
const eventbriteOrganizers = process.env.EVENTBRITE_ORGANIZERS.split(',');
const meetupKey = process.env.MEETUP_KEY;
const meetupGroups = process.env.MEETUP_GROUPS.split(',');

(async () => {
  // To allow the use of `await`
  const eventbrite = await fetchEventbriteEvents(eventbriteToken, eventbriteOrganizers);
  const meetup = await fetchMeetupEvents(meetupKey, meetupGroups);

  const events = []
    .concat(eventbrite)
    .concat(meetup)
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  process.stdout.write(`${JSON.stringify(events, null, 4)},\n`);

  return events;
})();
