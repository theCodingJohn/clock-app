# Clock App

## Api Used

- For random quotes : https://github.com/lukePeavey/quotable
- For user's location: https://freegeoip.app/
- For user's local time: http://worldtimeapi.org/

## User Stories

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

## Expected Behavior

- The greeting changes depending on the time of day. It should say:
  - "Good morning" between 5am and 12pm
  - "Good afternoon" between 12pm and 6pm
  - "Good evening" between 6pm and 5am
- The greeting icon and background image also changes depending on the time of day. They should show:
  - The sun icon and the daytime background image between 5am and 6pm
  - The moon icon and the nighttime background image between 6pm and 5am
- Generate a new random quote whenever the refresh icon is clicked

## Installation

1. Clone the repo

```sh
git clone https://github.com/theCodingJohn/clock-app.git
```

2. Install dependencies

```sh
yarn install
```

3. Start the project

```sh
yarn start
```
