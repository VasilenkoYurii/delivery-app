# Food Delivery Website

The Food Delivery Website is an online platform that allows users to register, receive discount coupons, place food orders, view order history, and receive order confirmation emails.

---

## Technologies Used

#### Frontend

- React: A JavaScript library for building user interfaces.
- React Router: A library for routing in React applications.
- Redux: A predictable state container for managing application state.
- React Redux: Official React bindings for Redux.
- Redux Toolkit: A package that simplifies Redux development.
- Axios: A library for making HTTP requests.
- Formik: A form library for React.
- Yup: A schema validation library.
- Notiflix: A library for displaying notifications.
- React Icons: A library of icons for React applications.
- React Loader Spinner: A component for displaying loading spinners.
- React Helmet: A component for managing the document head.
- React Helmet Async: A package for asynchronously managing the document head.
- nanoid: A library for generating unique IDs.

#### Backend

- Express: A fast and minimalist web application framework for Node.js.
- Mongoose: An object data modeling (ODM) library for MongoDB and Node.js.
- MongoDB: A popular NoSQL database for storing and retrieving data.
- CORS: A package for enabling Cross-Origin Resource Sharing.
- dotenv: A package for loading environment variables from a .env file.

---

#### Frontend Setup

- Install Node.js and npm (Node Package Manager) if you haven't already.
- Navigate to the project directory `cd client`.
- Run `npm install` to install the project dependencies.
- You need to go to `redux/operations.js` and change `axios.defaults.baseURL = ${window.location.origin}` to `axios.defaults.baseURL = "http://localhost:3001"`.
- Run `npm start` to start the development server.
- Open your browser and go to `http://localhost:3000` to access the application.

#### Backend Setup

- Install Node.js and npm (Node Package Manager) if you haven't already.
- Navigate to the project directory `cd server`.
- Run `npm install` to install the project dependencies.
- Run `npm star`t to start the server in production mode or `npm run start:dev` for development mode.

---

## Functionality

The Food Delivery Website provides the following features:

- User registration and authentication.
- Discount coupon generation and distribution.
- Placing food orders.
- Viewing order history.
- Receiving order confirmation emails.

Explore the website and enjoy the convenience of ordering food online, managing your orders, and receiving discounts through the coupon system.
