# setlist-api

## Overview

This is a simple node.js server for a list of songs for a band.

## Based on

This is based on the example that can be found on https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

## API 

The API is located at https://desolate-caverns-63932.herokuapp.com

You can use something like Postman in order to test the API using the following API calls:

### Get all songs
GET to `/songs`

### Add a song
POST to `/songs`

`x-www-form-urlencoded`

Key: `name`  Value: `<song name>`

### Read a song by id
GET to `/songs/:songid`

### Update a song by id
PUT to `/songs/:songid`

### Delete a song by id
DELETE to `/songs/:songid`

