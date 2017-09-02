_____________________________________

VERY BASIC KICKSTARTER SCRAPER
_____________________________________

*TO USE*

This is a very basic Kickstrter Scraper. To use, open the crowd_kick.html file and inspect document to see data entries from your selected Kickstarter projects logged in the console.

To add a Kickstarter project to the scraper (and collect data in the console) insert the project creator's name and the project title into the array at the top of the crowd_script.js file. Be aware a bit of manual manipulation may be required here (see below in Things to Fix).

*THINGS TO FIX*

(There are many...this is just the start...)

- If your project title is longer than 50 chars....

You can add a Kickstarter project to the scraper by inserting the project title and project creator's name. A problem with this however is that the Url maker function for the title doesn't recognise that if the title is too long it cuts it off at, sometimes seemlingly random points. Therefore be aware that it may take some trial and error to find the right url if your project title is over ~ 50 chars long.
