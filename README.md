# Covid Vaccine Tracker

## Purpose

Purpose of this application was to create a react application that presents the rate of vaccination in all US states and territories. 

## Live Link
[Heroku Link](https://covid-vaccine-tracker-us.herokuapp.com/)

## Install instructions
1. In the root of the directory install the required node dependencies. 
    ```
    $ npm install
    ```
2. Start the react application 
    ```
    $ npm start
    ```
3. Go to localhost:3000 in your browser and view the web page.

## Docker instructions
These instructions are for if you wish to run this application using Docker, make sure you have Docker installed.


1. Build the container image. 
    ```
    $ docker build -t {name_of_image} .
    ```

2. Start a new container. 
    ```
    $ docker run -dp 3000:3000 --name covid_tracker_container {name_of_image}
    ```

3. Open browser to localhost:3000.