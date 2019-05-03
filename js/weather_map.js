'use strict';

var corsUrl = "https://cors-anywhere.herokuapp.com/";
var darkSkyUrl = "https://api.darksky.net/forecast/";
var lat = 29.4246;
var lng = -98.4951;

$.ajax(corsUrl + darkSkyUrl + darkskyAPI + "/" + lat + "," + lng).done(function (data) {
    $('.today').append(
        "<h5 class='mb-3 text-center'>" + data.daily.data[0].temperatureHigh + "°F" + " / " + data.daily.data[0].temperatureLow + "°F" + "</h5>",
        "<p class='mb-3 text-center'> " + data.daily.data[0].icon + "</p>",
        "<p class='mb-3 text-center'> " + data.daily.data[0].summary + "</p>",
        "<p class='mb-3 text-center'> Humidity: " + data.daily.data[0].humidity + "</p>",
        "<p class='mb-3 text-center'> Wind: " + data.daily.data[0].windSpeed + "</p>",
        "<p class='mb-3 text-center'> UV Index: " + data.daily.data[0].uvIndex + "</p>"
    );
    $('.tomorrow').append(
        "<h5 class='mb-3 text-center'>" + data.daily.data[1].temperatureHigh + "°F" + " / " + data.daily.data[1].temperatureLow + "°F" + "</h5>",
        "<p class='mb-3 text-center'> " + data.daily.data[1].icon + "</p>",
        "<p class='mb-3 text-center'> " + data.daily.data[1].summary + "</p>",
        "<p class='mb-3 text-center'> Humidity: " + data.daily.data[1].humidity + "</p>",
        "<p class='mb-3 text-center'> Wind: " + data.daily.data[1].windSpeed + "</p>",
        "<p class='mb-3 text-center'> UV Index: " + data.daily.data[1].uvIndex + "</p>"
    );
    $('.day-after').append(
        "<h5 class='mb-3 text-center'>" + data.daily.data[2].temperatureHigh + "°F" + " / " + data.daily.data[2].temperatureLow + "°F" + "</h5>",
        "<p class='mb-3 text-center'> " + data.daily.data[2].icon + "</p>",
        "<p class='mb-3 text-center'> " + data.daily.data[2].summary + "</p>",
        "<p class='mb-3 text-center'> Humidity: " + data.daily.data[2].humidity + "</p>",
        "<p class='mb-3 text-center'> Wind: " + data.daily.data[2].windSpeed + "</p>",
        "<p class='mb-3 text-center'> UV Index: " + data.daily.data[2].uvIndex + "</p>"
    );
    console.log(data);
});

mapboxgl.accessToken = mapboxKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/navigation-preview-day-v2",
    zoom: 10,
    center: [-98.4951, 29.4246]
});
