# Review Component CRUD API

> This API has 5 different endpoints.
  - GET
  - POST (post a review and post a like)
  - PUT
  - DELETE

## GET

`/reviews/:appid`

This endpoint returns all reviews for the app with the id passed in as the url parameter.

## POST

`/reviews`

This endpoint creates a new review with the data passed in the request body.

`/likes/:reviewId`

This endpoint increments by one the number of likes for the review with the id passed in as the url parameter.

## PUT

`/reviews/:reviewId`

This endpoint updates the review with the id passed in as the url parameter with the data passed in the request body.

## DELETE

`/reviews/:reviewId`

This endpoint deletes the review with the id passed in as the url parameter.

