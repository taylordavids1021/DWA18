# DWA18
# Build a podcast app
Build a podcast app allowing users to browse various podcast shows, play episodes, and track their favourite episodes.

# Data
Data consists of three basic semantic units:

EPISODE: Corresponds to a specific MP3 file that a user can listen to
SEASON: A collection of EPISODE released across a specific timespan
SHOW: A specific podcast that contains a single or several SEASON

However, the following information is also exposed via the API:

PREVIEW: A summarised version of a SHOW that only contains basic data, but no SEASON or EPISODE

# Endpoints
 
Data can be called via a fetch request to the following two endpoints. Note that there is not always a one-to-one mapping between endpoints and actual data structures. Also, note that <ID> indicates where the dynamic ID for the requested item should be placed. For example: https://podcast-api.netlify.app/id/10716

# Endpoint URL	# Description
https://podcast-api.netlify.app/shows	Returns an array of PREVIEW objects
https://podcast-api.netlify.app/id/<ID>	Returns a single SHOW object with several SEASON objects and EPISODE objects directly embedded within

# Relationships

The various types of data used in this project are all related to each other: EPISODE, SEASON, SHOW, PREVIEW and GENRE. When you explore the data provided by the endpoints described in the previous section, you’ll discover the following relationships.

One or more EPISODE make up a SEASON
One or more SEASON make up a SHOW
SHOW and PREVIEW are different forms of the same data; these two types of data are related by the id property
SHOW and PREVIEW both have a property named GENRE
GENRE inside PREVIEW is an array of numbers called the id
GENRE inside SHOW is an array of strings called the title
The relationship between GENRE id and the title is described in the next section

# Genre Titles

Since genre information is exposed on PREVIEW only as specific GENRE ids, it is recommended that you include the mapping between GENRE ids and titles in your code itself:

ID   	Title
1	Personal Growth
2	True Crime and Investigative Journalism
3	History
4	Comedy
5	Entertainment
6	Business
7	Fiction
8	News
9	Kids and Family

# User Stories

✅Project is deployed to a custom Netlify URL

✅ All views in the app display correctly on the smallest mobile device available, “iPhone SE”. This can be emulated in Chrome Dev tools.

✅ All favicon information has been created an added correctly via https://realfavicongenerator.net/ (you are welcome to use any free PNG image you find on https://www.flaticon.com/)

✅ All metatag information has been created and added via https://metatags.io/ (You are welcome to use any free image on https://unsplash.com/). Be mindful to manually replace all URL values (especially image URL) to absolute Netlify URL values (you will need to deploy to Netlify first)

✅ All show data loaded via a fetch call from the https://podcast-api.netlify.app/shows

✅ When viewing a specific show, data is loaded via fetch from individual show endpoint

✅ There is a loading state while initial data is being loaded

✅ There is a loading state while new data is being loaded

✅ User can view the details of a show broken down into seasons, sorted by number

✅ User can listen to any episode in a season of a show

✅ User can see a view where only episodes for a specifically selected season are shown

✅ User can toggle between different seasons for the same show

✅ User can see the name of all available shows on the platform

✅ User sees preview image of shows when browsing

✅ User sees the amount of seasons per show as a number when browsing

✅ User sees a human-readable date as to when a show was last updated

✅ User sees what genres (as genre titles) a show is associated with when browsing

✅ User sees a preview image of seasons for a specific show

✅ User sees the amount of episodes in a season as a number

✅ User can go back to a show view from a season-specific view

✅ User can mark specific episodes as favourites to find them again

✅ User can visit a view where they see all their favourites

✅ User can see the show and season of any episode in their favourites list

✅ Episodes related by season/show are grouped in favourites

✅ User is able to remove episodes from their favourites

✅ User can arrange the list of shows by title from A-Z

✅ User can arrange the list of shows by title from Z-A

✅ User can arrange the list of shows by date updated in ascending order

✅ User can arrange the list of shows by date updated in descending order

✅ User can filter shows by title through a text input

✅ User can find shows based on fuzzy matching of strings (you can use something like https://fusejs.io/)

✅ Automatically filter shows by genre if the genre label is clicked on

✅ User sees the date and time that an episode was added to their favourites list

✅ User can arrange favourites by show titles from A-Z

✅ User can arrange favourites by show titles from Z-A

✅ User can arrange favourites by date updated in ascending order

✅ User can arrange favourites by date updated in descending order

✅ Audio player shows current progress and episode length as timestamps

✅ Audio player is always visible, so the user can listen to episodes while they browse

✅ User is prompted to confirm they want to close the page when audio is playing

✅ App remembers which show and episode the user listened to last when returning to the platform

✅ App remembers which shows and episodes the user listened to all the way through

✅ App remembers the timestamp where the user stopped listening within a 10-second accuracy period of closing

✅ App remembers and shows the timestamp progress of any episode the user has started listening to

✅ User can "reset" all their progress, effectively removing their listening history

✅ User is presented with a sliding carousel of possible shows they might be interested in on the landing page

✅ User can log in via https://app.supabase.com authentication

✅ User favourites are stored in the https://app.supabase.com database

✅ User favourites are automatically synced when logged in, ensuring that they share favourites between devices

✅ Users can share their favourites as a publicly accessible URL 