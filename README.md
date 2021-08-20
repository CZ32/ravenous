# Ravenous - A react web app where you can search for your favourite restaurants near you.

This project was designed by Codecademy.

## Techstack 
React, JavaScript, Yelp API, Surge

## What does this app do? 

Ravenous is a simple front-end app where you can search for restaurants based on name, ingredient, cuisine type, and location.

[LIVE VERSION up and running. Please visit cengiz-ravenous.surge.sh]

*** NOTE ***

From the same browser, use [https://cors-anywhere.herokuapp.com/] to temporarily allow access to the cors-anywhere demo and enable response from YELP API. 

## Learning Objectives

* Learn how to pass props to child components.  
* Utilising handlers to change the state of components. 
* Controlled components. 
* Learn how to call 3rd party API's (Yelp) and handle their responses. 
* Implicit Grant Flow for Client Authentication. 
* Creating and using API Keys and storing as environment variables. 
* Deploying front-end application using Surge.

## Dependancies

* "CORS Anywhere is a NodeJS proxy which adds CORS headers to the proxied request" this is used to access the Yelp API, that does not support CORS. Please view [documentation](https://github.com/Rob--W/cors-anywhere) for more information.

## How to install and run.

* Clone the repository.
* Using node, run 'npm install' to install depenancies.
* Run 'PORT=2000 npm start' to run Ravenous react app in the browser. The port number has to be changed from the default used by React as the cors-anywhere API limits the amount a client can call the API to prevent abuse. 
* Use [https://cors-anywhere.herokuapp.com/] to temporarily allow access to the cors-anywhere demo and enable response from YELP API.  

## Using the application.

1. Insert a restaurant/ cuisine name.
2. Insert a location.
3. Optional:  Choose result order criteria.
4. Click 'Let's go button'.
5. Receive results.





  
