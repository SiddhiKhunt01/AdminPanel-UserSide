const express = require('express');
const { 
  userPage, 
  singleProduct, 
  showRegister, 
  showLogin, 
  addToCart, 
  viewCart, 
  Adduser, 
  loginUser 
} = require('../controllers/user.controller');

const routes = express.Router();

routes.get("/", userPage);
routes.get("/single-product/:id", singleProduct);

routes.get("/register", showRegister);
routes.post("/register", Adduser);
routes.get("/login", showLogin);
routes.post("/login", loginUser);

routes.get("/add-cart/:id", addToCart);  
routes.get("/cart", viewCart);    


module.exports = routes;
