# PokeChallenge

Project built for BlackShield.pt in order to show some of my Frontend proficiencies.

# Running the project

- `cd pokechallenge`
- `npm i`
- `npm run dev` for development env

production build currently not setup

# Structure

Made it so that the format is easy to understand, since it's a small app and doesn't need too much complexity. Separated helper functions and data, components into main (root of the folder) and UI components.

All assets are coming from the API directly, so there's only a vite svg that comes standard with vite build.

## API

The API itself is quite interesting, however it does not allow for result limiting, which means we have to pull large lists.

What I've done in order to display only 25 items at once was to only get detailed data of these 25, keeping in mind that the large list is still stored in the application.

The app itself would be able to have many more functionalities within this sort of UI, however I didn't have a lot of time to implement everything the API has to offer.

## Hypothetical full product

Here's a comprehensive list of changes for the full product:

- Separation of CSSinJs files
- Implementing a result limiting feature on the API itself; coordination with the backend team
- UI features and accessibility to be improved
- Better finder functions for the poke images
- Show more information about each poke
- Ability to sort pokes
- Modals for abilities, moves, etc.
- Lore friendly UI (I'm not familiar with pokemons) :)
- A more robust file structure
- Less use of the React Context API to cause less re-renders
- Some memoization of functions
- caching
- necessity for ENV files to keep sensitive data we would potentially store
- session data persistance (achievable with URL routing or localStorage, redux persist or any other tool)

# Tech Stack

- Vite with TypeScript
- ChakraUI for component library
- axios instancing for requests

/////
