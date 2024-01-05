## MERN Shopping Web Application

This project is a full-stack web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. The primary functionality of the application is to allow users to purchase products, and payments are handled through the Stripe payment gateway.

## Features

- **User Authentication**: Users can create accounts, log in, and log out securely.

- **Product Listings**: Display a list of products with details such as name, description, price, and image.

- **Shopping Cart**: Users can add products to their cart, view the cart, and proceed to checkout.

- **Payment Integration**: Payments are handled using the Stripe payment gateway to ensure secure and seamless transactions.

- **Admin Product Management**: Admin users can effortlessly add products to keep our catalog fresh and up-to-date.

- **Cart Customization**: Easily adjust the quantity of items in your cart, remove unwanted items, and see your total in real-time.

- **Category-Based Product Display**: Find exactly what you're looking for with our organized product categories.

- **React Toast Notifications**: Stay informed with pop-up notifications powered by React Toast.

- **Express.js Backend**: Our robust backend is built using Express.js, providing fast and efficient server-side operations.

- **Redux State Management**: Utilizing Redux, we manage application state seamlessly, ensuring a smooth user experience.

- **Tailwind CSS Styling**: Our modern and visually appealing UI is crafted using Tailwind CSS, providing a polished and aesthetic design.

- **Profile Picture Upload**: Personalize your account by uploading a profile picture during the sign-up process.

## Technologies Used

- React
- Node.js
- MongoDB
- Express.js
- Redux
- Stripe API
- Tailwind CSS

## Prerequisites

```
Before running the application, make sure you have the following installed:

- Node.js and npm
- MongoDB
- Stripe account for API keys

```

## Live Demo

Experience the flavors of MERN Shopping Web Application by visiting [Live Demo](https://product-mern-ecru.vercel.app)

## Installation

To run project locally, follow these steps:

Clone this repository.

```bash
  git clone
```
## Backend

1. Navigate to the backend directory:

```bash
  cd backend

```

2. Install dependencies:

```bash
  npm install

```

3. Create a `.env` file in backend folder and add the following:

```bash
MONGO_URI=mongodb+srv://admin-keshav:keshav13@cluster0.ohp8z.mongodb.net/hlo
STRIPE_SECRET_KEY=sk_test_51NwMokExTKwmYDjHlob2noz3AuxKDhV5SIbmXJtr0W3Krnr1FBOaLjqdnO2nzyYvp99CO3GWOZN7n59Q7GwdkfF3000vrSTKVe
FRONTEND_URL=http://localhost:5173

```

4. Run the backend server:

```bash
  npm run server

```
`make sure you are getting this in terminal after starting the backend server`
```
Server is running at :  8000
Database is connected

```

## Frontend

1. Navigate to the frontend directory:

```bash
  cd frontend

```

2. Install dependencies:

```bash
  npm install

```

1. Create a `.env` file in frontend folder and add the following:

```bash
VITE_APP_SERVER_DOMAIN=http://localhost:8000/
VITE_APP_STRIPE_PUBLIC_KEY=pk_test_51NwMokExTKwmYDjHR3E5upuF2LRmYQwKUjf4RwDvyh31pmwEkc40KaT0D4J0EDQigjN2NYwzoBXfNZbEGNCBSM200020myYDeF

```

1. Run the frontend with following command:

```bash
  npm run dev

```
## Test Account

### For a better experience, you can use the following test account for login:

```
Email: kj9646331@gmail.com
Password: 123

```

## Deployment Links

```
Frontend Deployed Link - https://product-mern-ecru.vercel.app
Backend Deployed Link  - https://product-backend-1gdg.onrender.com
Github Repository Link - https://github.com/keshavkumar526/Product-MERN

```

## Note - `Folder Structure of both both folders are in internal readmes`

## Contributing

We welcome contributions from the community. Whether it's bug fixes, feature enhancements, or documentation improvements, your help is greatly appreciated.
