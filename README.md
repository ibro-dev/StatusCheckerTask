## Documentation and explanations 
To display the statuspage data of a website through our react front-end we need to perform a http requests to the status API related to the website, as we don't actually have an API, i needed to set up a server that crawls the target websites and turns it into an API that i could use to feed my app.

The solution contains two parts:

     1) A back-end app "scraperapp", tech used Nodejs, Express, Cheerio, axios.
       done features:
        -Fetching a webpage using the HTTP client axios.
        -Extracting data from a webpage using cheerio.
        -Saving the data in JSON format and create an output.json file in the public folder if the react-app to -be used during HTTP requests.
    
    2) A front-end app "checkstatuspage", tech used React+Redux, axios, CSS Bulma framework.
       done features:
        -create a component "PageStatus" that performs http requests to the server and get a Json format response using axios.
        -display the requested data into the UI.
        -When someone wants to add new statuspage ? i created a component "PagesList" that could post a new statuspage Url to the server to be then scraped in order to extract its content and save it into a custom Json format file.
        -added an autoamted refresh(page refresh devery 10 mins)
        -nothing is hardcoded in the page
        -I spent about 4 hours with the task
########################################################################

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
