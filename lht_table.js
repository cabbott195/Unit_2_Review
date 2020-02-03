"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Colby Abbott
   Date:   2/3/20

	
*/
//Sets the calendars displayed date
var thisDay = new Date("August 30, 2018");

//HTML code for the tables
var tableHTML = "<table id='eventTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

//sets the end date for two weeks after the date in the new Date element
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

//loop for the eventDates array
for(var i = 0; i < eventDates.length; i++){
    var eventDate = new Date(eventDates[i]);
    var eventDay = eventDate.toDateString();
    var eventTime = eventDate.toLocaleTimeString();

    //if statement to see if the event falls into the two-week window that lewis has requested
    if(thisDay <= eventDate && eventDate <= endDate){
        tableHTML += "<tr>";
        tableHTML += "<td>" + eventDay + " @ " + eventTime + "</td>";
        tableHTML += "<td>" + eventDescriptions[i] + "</td>";
        tableHTML += "<td>" + eventPrices[i] + "</td>";
        tableHTML += "</tr>";
    }
}

tableHTML += "</table>";

//Insert the HTML code into the eventList box
document.getElementById("eventList").innerHTML = tableHTML;

