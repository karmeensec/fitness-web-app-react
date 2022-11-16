# Fitness Web Application
## Documentation

This is a Fitness Exercises Web Application created using Rapid Api. Inludes exercise categories to train your different muscle groups. Browse here with more than 1000 exercises. Web Page includes pagination for your easy use. Also you can find some Youtube videos with the similar exercises and similar equipments.

Data fetched from its source using Rapid API.

User interface designed with Material UI.

https://fitnesskama.netlify.app/


## Tech Stack

**Client:** ReactJs, MUI




## Features

- More than 1000 exercises with GIF Images.
- Exercises with Similar Muscle Groups from Youtube.
- Exercises with Similar Equipments from Youtube.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Installation


### `npx create-react-app`

### `npx install --legacy-peer-deps`

### `npm install @mui/material @mui/styled-engine-sc styled-components`

### `npm i react-horizontal-scrolling-menu`

### `npm install react-bootstrap`


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Deployment

To deploy this project run

```bash
  npm run build
```


## Screenshots

![screencapture-localhost-3000-2022-11-16-23_35_26](https://user-images.githubusercontent.com/84046930/202309750-b05b4b83-f8f4-4187-8b3b-92aefc8da9e5.png)

![screencapture-localhost-3000-exercise-0001-2022-11-16-23_35_46](https://user-images.githubusercontent.com/84046930/202309778-3c484a19-dbb6-410d-9bd7-932f430150e5.png)


## Authors

- [@Kamilismayilzade](https://www.github.com/Kamilismayilzade)

