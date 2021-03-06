# funTappd
![funTappd logo](https://i.imgur.com/ZGMpaaT.png)

[funTappd live](http://funtappd.herokuapp.com)

funTappd is a full-stack web application designed after Untappd. It is built on a Ruby on Rails backend, PostgreSQL database, and React.js frontend. The application also utilizes Cloudinary to manage images files, where users are able to upload pictures of the beers that they come across within their reviews.

## Features & Implementation 

### Drink Creation

Users are able to find beers and rate them. They are able to view the beer name, style, ABV, brewery, and comments on the brewery. If they are unable to find the beer they are looking for, users can create the beer and add it to the beer list. If they would like, they can later update their beer submission, changing any of the fields along the way.
![drink creation](https://i.imgur.com/cdGpGfL.png)

### Dashboard

Having a feed descriptive towards the user adds a personal touch for the user's user experience. This dashboard will have stats a feed of all that user's post, and these stats and reviews will be visible and accessible to other users. 

### Reviews 

Users can find relevant reviews based on a specific user, and even specific beers. The overall score of the beer is averaged and thus ranked. The rating information is then taken, based on which one the user rated, and can be used to display on their profile their favorite beer tastes. 


## Ideas for Future Work

### Search/Filtering

Searching specifically for beers greatly shortens the process of finding what the user wants. By doing so, the user is able to search and filter based on breweries and styles. 

### Likes/Follows

The social aspect greatly enhances the Untappd experience. Enabling interactions amongst users such as liking reviews would make the app much more than just a review reading application. 

### Checkins

Craft beers are often hard to find outside of the brewery that makes them. It would be highly beneficial is users were able to search through bars/taverns that had reports and checkins of a particular type of beer. This would be implemented via checkins to specific locations, linking a beer to that bar. 