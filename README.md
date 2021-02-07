# US Airports Availability (July 2012)

### This is an assignment for UW GEOG 458 - Lab 3: Web Map Application

**This Repo contains:**
* Main html file for map display
* CSS folder 
* JS folder
* Image folder for result
* Assets folder for geoJSON data
____________________________________________________________________________________________________________________________________________________________________

## Presenting the map preview 

![!US Airports Map](img/preview.jpg)

**Note:** This map does cover Alaska and Hawaii, please run the html file (by github url path) for interactive map. 

## Brief Introduction:

This interactive map will display all the detail of airport location in the United States (including Alaska, Hawaii, and Puerto Rico). This map have two ways to tell the story. One of them, you can check the individual airport (plane icon) up close on the colorful terrain map and can look up thier name by clicking them. You can also check if the specific airport have an air control tower or not. For the another one, you can look at each US state to see the total count of airports. You can check on the legend to the corresponding color to see the range and amount.

## Functions Methods:

* **onEachFeature -**  This function will get the given feature and layer from the airport data by GeoJSON ajax load. I used this function to enable each airport's marker to have pop-up on the map, with the airport name display from the GeoJSON name property. At the end, I return the feature object as the property of control tower for the next following function.

* **pointToLayer -** This function will get the given feature and latitude-longitude coordinate from the airport data and the onEachFeature function. Here, I want this function to assign the css id based on their control tower value in the feature object. Recall that the feature was being returned by the control tower property on onEachFeature function. If the control tower marked as "Y" as yes, then assign the id to 0. If it marked as "N" as no, then assign to 1. If neither, assign to 2. Those id number are for the marker colors (green for id 0 and orange for id 1). This function will return by creating a marker that will be pin on the map based on the given latitude-longitude coordinate. Also assign the class for customizing marker as airplane icon with color corresonding to the id.

* **Style -** This function will get the given feature from the airport data (not from the onEachFeature function). I used this function to use the count property and call the following function setColor to set the id number for colors. I also used other styling feature such as opacity to make the appearence look clean. This function will return with all of the styling to the map.

* **setColor -** This function will get the given count integer from the count property. I want this function to assign the css id based on the range of count. Those ids are for the color of the choropleth map. The function, then, return the color property with the id assigned.  

## Data Sources:

* Small Scale Dataset Airports of the US - made by USGS
* US states boundaries - made by Mike Bostock of D3
* Basemap - made by Humanitarian OpenStreetMap Team

## Credits and Acknowledgment:

This lab was made by UW professor, Bo Zhao, and his team, Humanistic GIS Laboratory. I want to thanks his team for putting the effort for this educational purpose by teaching us how to do fundamental coding with digital mapping. 
