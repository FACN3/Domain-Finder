# :confetti_ball::confetti_ball:Domain-Finder:confetti_ball::confetti_ball:

## *Want to know where a domain is located? How about how it looked at a period in history? We've the tool for you! *


#### WHO :busts_in_silhouette:
 - MynahMarie
 - NickP123
 - SamiSha

#### WHY :key:

We wanted to create a simple application that blended together the information from two different API sources so that the user could see information about a domain (location, IP address etc) and link through to an image of how it looked at the period of time selected.

#### WHAT	:loudspeaker:
To access the APIs successfully via our app, using pure JavaScript functions.

#### HOW :wrench:

The two API's we have targeted are:

- Domain information: http://freegeoip.net/
- Historic snapshot of website: http://archive.org/web/

Outline as follows:

- 1 Text entry of Domain and year to search by user
- 2 Event listener on submit button
- 3 XHR/API Request
- 4 Data Filtering in logic.js
- 5 Dom Manipulation
- 6 Rendering of information back to user

#### Instructions for using the website:

1) Insert any type of domain that actually exists.
2) Insert the year you want to check how the site looked like back in that time.
3) Press "Search the Domain" Button.
4) If the domain have archived information a button called "Take me back!" will appear.
5) Click the "Take me back!" button to go back to the year you inserted in the textbox.
6) Enjoy the past.

----------------------------------


##### SYSTEM ARCHITECTURE / PLAN

![img_6025](https://user-images.githubusercontent.com/25667270/32848875-41c314ac-ca36-11e7-9444-99b860e74cd2.JPG)

###### STEP 1
- Readme
- Setup of project and folders
- Whiteboad steps


###### STEP 2
- Base HTML and Div separation
- Base styling
- Outline testing structure
- Code functions to make API requests and filter data
- Ensure information requested is getting to the Dom

###### STEP 3
- Write DOM.JS
- Ensure information is rendering to the correct Div
- Style.css
- Testing
- Update README
- Review code between team members to ensure understanding

###### STEP 4
- Stretch goal - add in Wikipedia API information on web pages that have been called. Code has been designed to expand to this and other APIs
