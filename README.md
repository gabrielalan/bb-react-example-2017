Hours used: 7:30

## Decisions

1. It has been written in React, because... yeah... you know... reasons :neutral_face:
2. The search filter is used to match only against `merchant` and `amount`.
3. No CSS frameworks or libraries. I think on this case is not necessary.
3. Used webpack and some other tools mixedd on react-script, which is a simple way to write a React App.
    * This means that some files are generated automatically (like *manifest.json, index.html and etc), but all the APP code is made by hand.

## Excecute

Just open `build/index.html`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!