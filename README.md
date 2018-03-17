# react-weather-app

A weather app that I have been tasked to produce after completing the React fundamentals course at TylerMcGinnis.com. 

The curriculum for the app can be found here:
https://github.com/tylermcginnis/react-fundamentals-curriculum

The ideal situation at TylerMcGinnis.com suggests that we should set out
to look at the finished page that can be found here: http://artist-submarine-48713.netlify.com/. And then to create a replica.
This will be what I set out to do initially.

Creating a weather app is also a project challenge set in FreeCodeCamp. So I intend to use this opportunity to complete this project also.

The user stories found at FreeCodeCamp are as follows:

1. I can see the weather in my current location

2. I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.

3. I can push a button to toggle between Fahrenheit and  Celsius.

Therefore, I will initially set out to recreate the TylerMcginnins weather app using ES5 javascript (and JSX). Once complete I will then incorporate the additional features required in order to meet the user stories set out at FreeCodeCamp.

# Breaking Down the Weather App

## Pages

There are two pages present in the application.

Both pages possess the same navbar, which means I should create this once,
and render the navbar at both routes.

The navbar contains the app title which is at the left of the nav bar and
a form at the right. The input field appears to have the same fields as the form present in the middle of the home page and both appear to cause the same behaviour (a redirect to the forecast page which displays the 5 day forecast for the defined city.)

The page at the home ('/') route which displays a patterned background, an input form with a single field for text entry and a button. It also has a title. All of these elements are centred in the page.

The page at the forecast ('/forecast') route doesn't have a background,
It simply displays 5 instances of the same component, one for each of the next 5 days. The component is one that shows an image which symbolises the expected weather, with some text underneath it. For the weather icons I will use the weather-icons library and will also incorporate the react-weathericons library which is built works alongside it.



 

