## Your group members and scrum leader (if applicable)

Max Bondar

## Project Idea

An app where you can share your digital assests for the creative people.

## Your tech stack (frontend, backend, database)

Front-end: HTML, CSS, JavaScript, React, FireBase
Back-end: Mongo, Node, Express
Deployment: Yandex.Cloud

## List of backend models and their properties

## User stories

AAU, I want to be able to:

- sign up a new account
- log in, log out of your account
- create new digital asset card
- upload asset
- edit and delete a asset card
- view a different collections of assets by other users
- comment asset, like (stretch)

Post-MVP

- add marketplace functonality to sell your asset

## React component hierarchy

- APP
- Navbar??
- Header
- About
- Login
- Collection of digital assets
- Asset card
- Footer

## List of backend models and their properties

User

- Username: String
- Password: String
- User ID: String
- Asset:[Asset]

Asset

- User: UserId
- Image: Photo, Video (upload)
- Title: String
- Comments;[Comments]

Comments(Stretch)

- Content: String
- Time: DateTime
- User: User

## ERD

[erd](https://github.com/Max12345-ally/Project4/blob/main/2022-12-23%2018.23.49.jpg)

### Wireframes
