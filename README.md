# Shopping cart

Shopping cart is a virtual online shopping platform, users select different number of items into the shopping cart and checkout at the end of the order.

## Getting Started

Download the movie-review repo

You can now deploy the movie-review

```bash
npm run dev
# or
yarn dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## Developing

Notable libraries in use are as follows:

- `React`: [React](https://reactjs.org/docs/getting-started.html)
- `Redux Toolkit`: [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- `Redux Saga`:[Redux Saga](https://redux-saga.js.org/docs/introduction/GettingStarted)

The project follows a domain approach to organizational structure of code as follows:

```bash
./src
|-- components
|-- saga
|-- store
|-- App.js
```

### Redux Toolkit

In order to manage states between components, we use redux toolkit to take care of the changes in our shopping cart more predictable and tracable. By createSlice we can write all the code you need for your Redux store in a single file, including actions and reducers.

### Redux Saga

Redux saga essentially acts as a separate thread to our api call to perform complex asynchronous tasks and updating our shopping cart state once it is completed.
