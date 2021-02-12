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

**Note:** This map does cover Alaska, Hawaii, and Puerto Rico. Please run the html file (by github url path) for interactive map. 

## Brief Introduction:

This interactive map will display all the detail of airport locations in the United States (including Alaska, Hawaii, and Puerto Rico). This map has two ways to tell the story: to see the individual airports and to see the total airports in each state. The data (made by USGS) was collected by July 2012, and this is for the educational purpose of learning to integrate web application with digital geography topic.   

## Functions for this Map:

* **How does this map tell stories -** One of them, you can check the individual airport (plane icon) up close on the colorful terrain map and can look upon their name by clicking on them. You can also check if that specific airport has an air control tower or not based on the color and the legend. For another one, you can look at each US state to see the total count of airports. You can check on the legend to the corresponding color to see the range and amount.

* **The display on the map -** I used the specific base map as a colorfully detailed terrain for those people who want to see the surrounding. The base map includes the road, river, green/forest lands that could help navigate to the airport. There is also the zoom control function (on the top-left) to see the detail in city-scale or to see the overall world-scale.    

* **Measurement toolset -** I added the Leaflet plug-in, "PloylineMeasure"; it is the measurement tool on the map. The purpose of adding it is to let the user be curious about how far away from a specific airport to the destination they want. The credit is from the link below the Libraries section. You can click the arrow-like icon to place any starting point and click the dot again to stop, and it will tell you the distance between two points. You can place as many multi-stop dots as you want. Use the "X" icon to clear everything. The last box below is for changing the distance units (here, I can provide in meters, miles, and nanometers). 

## Libraries:

* Chroma.js @1.3.4
* Font Awesome @4.3.0
* Google Fonts - Open Sans
* JQuery @3.1.0
* Leaflet Ajax @2.1.0
* Leaflet.css and Leaflet.js @1.7.1
* Leaflet Plug-in - PolylineMeasure (by [ppete2](https://github.com/ppete2/Leaflet.PolylineMeasure)) 

## Data Sources:

* Small Scale Dataset Airports of the US - made by USGS
* US states boundaries - made by Mike Bostock of D3
* Basemap - made by Humanitarian OpenStreetMap Team

## Credits and Acknowledgment:

This lab was made by UW professor, Bo Zhao, and his team, Humanistic GIS Laboratory. I want to thanks his team for putting in the effort for this educational purpose by teaching us how to do fundamental coding with digital mapping. 
