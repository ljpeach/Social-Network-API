# Social-Network-API
An API for a social network application. Uses MongoDB and express.js to manage and distribute data.

## Installation Guide

1. Download the repository using your favorite method (git clone, download as zip, etc.).
2. Open a terminal instance in the `Social-network-API` directory.
3. Call ```npm i``` and wait for dependant packages to install.

## Usage Guide

1. Open a terminal instance in the `Social-network-API` directory.
2. Call ```node index.js``` and the API should function.

### API Routes
#### User
- `/api/users/`
    - get : Fetches all users
    - post : Create new user via JSON request body. 
        - Body requires keys `username` and `email`. 
        - `thoughts` and `friends` keys can take arrays with ID's of existing users or thoughts, but should typically be excluded.
- `/api/users/:userId/`
    - get : Get the user with the `userId` specified. Shows full information for all thoughts and friends.
    - put : Updates the specified user via JSON request body.
        - Body should only take `username` and `email` fields. Updating `username` will also update the username of all the user's thoughts.
    - delete : Deletes the specified user. Will also remove any thoughts the user has authored.
#### Friends
- `/api/users/:userId/friends/:friendId`
    - post : Adds the user specified by `friendId` to the friend list of the user specified by `userId`.
    - delete : Removes the user specified by `friendId` from the friend list of the user specified by `userId`.
#### Thoughts
- `/api/thoughts/`
    - get : Gets all thoughts
    - post : Creates a new thought via the JSON request body.
        - Body requires keys `thoughtText` and `userId`.
- `/api/thoughts/:thoughtId`
    - get : Gets the thought with the `thoughtId` specified.
    - put : Updates the specified thought via JSON request body.
        - Body should only take `thoughtText` fields.
    - delete : Deletes the specified thought.
#### Reactions
- `/api/thoughts/:thoughtId/reactions`
    - post : Creates a reaction on the thought specified by `thoughtId` via JSON request body.
        - Body requires `reactionBody` and `username` keys.
- `/api/thoughts/:thoughtId/reactions/:reactionId`
    - delete : Removes the reaction specified by `reactionId` from the thought specified by `thoughtId`.


## Tutorial Video

[Click here for tutorial video](https://youtu.be/rQTliNys_20)