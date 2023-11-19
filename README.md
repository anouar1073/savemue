## Inspiration
Ever been outside during a thunderstorm in the middle of the City, panicked and did not know where to find shelter? SaveMue is here to save you!
We were inspired by the challenge set out by the Landeshauptstadt München and motivated by the increasing frequency of extreme weather events.

## What it does
SaveMue is an app that provides aid during extreme weather events (EWE), by providing guidelines and locations relevant to the current weather condition. For example: If you are in the middle of town and a sudden storm breaks out, you need to find shelter. You start running around or fumbling on your phone, searching in google, but you are not able find suitable shelter under stress. This is were SaveMue comes in. You open the app and it detects that there is thunderstorm is going on and gives you short and precise instruction what to do and where you can find shelter. 
The app is designed to handle different weather events, like floods, heatwaves, hail. 

## How we built it
We used Figma to design the app and then generated react-native component with with the Unify Plugin. In react-native we used libaries to display the relevant map and added points of interest for current EWE. For example during a heatwave we use the geolaction data for public water taps provides by the munich open-data set.

## Challenges we ran into
The main challenge we ran into, was the usage of openstreetmaps in react-native, because there are libraries that provide this functionality.
Another challenge was converting from our figma design to a React Native project using an AI tool that overcomplicated the code and forced us to spend a lot of time cleaning up our code.

## Accomplishments that we're proud of

- Intuitive design
- Map feature

## What we learned
- design an app with Figma
- improve our React Native knowledge

## What's next for SaveMue

- Complete the different help pages
- Integrate DWD warnings in App
- Inform when an event is over
- Extend map database to be able to find near shelters, public fountains, healthcare services...
- Add more extreme weather events
- Provide information about weather events without being online
- Fullfill GDPR by asking users's consent to share their data
