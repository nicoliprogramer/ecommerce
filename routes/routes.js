import { Router } from "express";
import passport from "passport";
import multer from "multer";
import authentication from "../middlewares/authentication.js";
import { whenSignUp, whenLogin } from "../middlewares/userInformation.js";
import {
  getCart,
  postProductCart,
  deleteProductCart,
  deleteAllCart,
} from "../controllers/cart.js";
import {
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

import {
  getSignIn,
  getSignUp,
  signOff,
  getErrorLogin,
  getErrorRegister,
  findHome,
} from "../controllers/user.js";

import afterPurchase from "../controllers/buy.js";

const upload = multer({ dest: "./public/img/uploads/" });

passport.use("register", whenSignUp);
passport.use("login", whenLogin);

const dosignup = Router();
const dologin = Router();
const home = Router();
const products = Router();
const cart = Router();
const buy = Router();
const logout = Router();

dosignup.get("/", getSignUp);
dosignup.post(
  "/",
  upload.single("photo"),
  passport.authenticate("register", {
    failureRedirect: "dosignup/errorRegistro",
    successRedirect: "/home",
  })
);
dosignup.get("/errorRegistro", getErrorRegister); // corregir error en login and register

dologin.get("/", getSignIn);
dologin.post(
  "/",
  passport.authenticate("login", {
    failureRedirect: "/dologin/errordologin",
    successRedirect: "/home",
  })
);
dologin.get("/errordologin", getErrorLogin); // // // //

home.get("/", findHome);

products.get("/", getProduct);
products.post("/", authentication, postProduct);
products.put("/:id", authentication, updateProduct);
products.delete("/:id", authentication, deleteProduct);

cart.get("/", authentication, getCart);
cart.post("/", authentication, postProductCart);
cart.post("/product", authentication, deleteProductCart);
cart.delete("/", authentication, deleteAllCart);

buy.post("/", authentication, afterPurchase);

logout.get("/", signOff);

export { home, products, dologin, dosignup, logout, cart, buy };
