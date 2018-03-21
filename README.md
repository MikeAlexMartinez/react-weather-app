# react-weather-app

A weather app that I have been tasked to produce after completing the React fundamentals course at TylerMcGinnis.com. 

The curriculum for the app can be found here:
https://github.com/tylermcginnis/react-fundamentals-curriculum

The ideal situation at TylerMcGinnis.com suggests that we should set out
to look at the finished page that can be found here: http://artist-submarine-48713.netlify.com/. And then to create a replica.
This will be what I set out to do initially.

My current attempt at the app can be viewed here: https://projectmam-react-weather-app.firebaseapp.com/

Creating a weather app is also a project challenge set in FreeCodeCamp. So I intend to use this opportunity to complete this project also.

The user stories found at FreeCodeCamp are as follows:

1. I can see the weather in my current location

2. I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.

3. I can push a button to toggle between Fahrenheit and Celsius.

Therefore, I will initially set out to recreate the TylerMcginnins weather app. Once complete I will then incorporate the additional features required in order to meet the user stories set out at FreeCodeCamp.

# Breaking Down the Weather App

## Pages

There are three pages present in the application.

Both pages possess the same navbar, which means I should create this once,
and render the navbar at both routes.

The navbar contains the app title which is at the left of the nav bar and
a form at the right. The input field appears to have the same fields as the form present in the middle of the home page and both appear to cause the same behaviour (a redirect to the forecast page which displays the 5 day forecast for the defined city.)

The page at the home ('/') route which displays a patterned background, an input form with a single field for text entry and a button. It also has a title. All of these elements are centred in the page.

The page at the forecast ('/forecast') route doesn't have a background,
It simply displays 5 instances of the same component, one for each of the next 5 days. The component is one that shows an image which symbolises the expected weather, with some text underneath it. For the weather icons I will use the weather-icons library and will also incorporate the react-weathericons library which is built to work alongside the aforementioned icons library.

When a forecast item is pressed you are taken to the third page which displays more details about the weather for the day selected, in the currently searched for location.

## Components

In my first iteration of this app I used the following components:
1. App: This is the main part of the application in that it is what is rendered to the DOM first. Routing will be controlled from here.
2. NavBar: The NavBar will be present in every page of the application so it makes sense to define it once and reuse throughout the App.
3. LocationForm: The LocationForm is used to collect data from the user. It is present within the NavBar and also within the landing page. The only difference between the form at the landing page and the navbar, the difference between the two being the styling (navbar is horizontal, landing page form is stacked vertically). In the initial app I used this form to
collect input and then I render the forecast component using a query string to tell me which City and Country I need to collect the forecast for.
4. Toast: This component hovers beneath the navbar and is rendered if the text in one the LocationForm input isn't in the correct form.
5. Home: This component is rendered at the landing page route. It contains some text and the LocationForm.
6. Loading: While the app retrieves data from the open weather api service this component renders. Currently it renders indefinitely if no data is retrieved. I need to add a timer
  so that if it still renders after five seconds the page reroutes to an error page.
7. Forecast: This component is currently my most stateful component. Data retrieved from the Open Weather API is stored in here, and then the 5 day forecast and 1 day detailed view is rendered using the data from this component. In my first iteration of this app due to the data being stored here, and because the location can be changed from a component contained in the navbar, if a user is already within the '/forecast' route, submitting a new location doesn't cause a reload (which refreshes the location and forecast component). Therefore, In the LocationForm, I trigger a page reload, so the query-string passed is reinterpreted properly by the forecast component and the data is retrieved properly. This is a bit hacky, and doesn't feel like the react way of doing things. In my next iteration of this app I will lift the state up into the APP component and this will allow the locationForm wherever it is to appropriately update the state. I will most likely use redux and so reworking the app can wait until then.
8. ForecastItem: This is a stateless functional component. It renders the date and an icon symbolising the forecast weather. once clicked the ForecastDetail will be rendered.
9. ForecastDetail: This is another stateless function component. It renders a single day of weather using the same data as stored in the Forecast component. I've made this component such that once it is clicked, you are taken back to the main forecast.

## Utils

1. api: This file is responsible for requesting and processing data from the OpenWeatherAPI.
2. cityAndCountry: This file is reponsible for parsing the input provided by the user and testing it's validity.
3. date: This file has my custom date manipulation functions.




 

