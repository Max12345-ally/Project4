## Your group members and scrum leader (if applicable)

Max Bondar

## Project Idea
Beehance. 
Looking for inspiration?
An app where you can share your digital assets for the creative people.
Share your creative solutions, get feedback from our global community.
See the best projects across graphic design, illustration, photography, 3D art and more.
Boost your professional confidence. Find new colleagues or friends!

## Links

[deployment](https://project4-frontend.vercel.app/)
[frontend](https://github.com/Max12345-ally/Project4_frontend)
[backend](https://github.com/Max12345-ally/Project4)

## Your tech stack (frontend, backend, database)

Front-end: HTML, CSS, JavaScript, React, FireBase
Back-end: Mongo, Node, Express
Deployment: Vercel/Heroku

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
- Navbar
- Header
- About
- Login
- Collection of digital assets
- Asset card


## List of backend models and their properties

- User:

- email: String
- fullName: String
- title: String
- about: String
- avatarLink: String
    

- Asset:

  - user: ref: "User"
  - userName: String
  - image: String
  - title: String
   

## ERD

[erd](https://github.com/Max12345-ally/Project4/blob/main/2022-12-23%2018.23.49.jpg)

### Wireframes

[link](<https://github.com/Max12345-ally/Project4/blob/main/1_MainPage%20(1).png>)
