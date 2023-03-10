import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Home from "./pages/Home";
import Data from "./components/flashdeals/data";
import { useContext, useState } from "react";
import Cart from "./common/cart/Cart";
import Footer from "./common/footer/Footer";
import StorePages from "./pages/StorePages";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./admin/pages/home/Dashboard";
import ProductList from "./admin/pages/list/ProductList";
import UserList from "./admin/pages/list/UserList";

import UserInfo from "./admin/pages/single/UserInfo";
import NewUser from "./admin/pages/new/NewUser";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import OrderHistoryScreen from "./pages/OrderHistoryScreen";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import Contact from "./components/forms/Contact";
import PasswordReset from "./components/forms/PasswordReset";
import AccountVerify from "./components/forms/AccountVerify";
import PassResetForm from "./components/forms/PassResetForm";
import VerifySuccess from "./components/forms/VerifySuccess";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import { MessengerChat } from "react-messenger-chat-plugin";
// import MessengerCustomerChat from "react-messenger-customer-chat";

import VendorList from "./admin/pages/list/VendorList";
import ShippingAddress from "./components/stepper/ShippingAddress";
import Confirmation from "./components/stepper/Confirmation";
import Payment from "./components/stepper/Payment";
import Finish from "./components/stepper/Finnish";
import UserProfile from "./pages/UserProfile";
import VendorProfile from "./pages/VendorProfile";
import Privacy from "./components/about/Privacy";
import Terms from "./components/about/Terms";
import OurStores from "./components/about/OurStores";
import UserEdit from "./admin/pages/edit/UserEdit";
import ProductEdit from "./admin/pages/edit/ProductEdit";
import NewProduct from "./admin/pages/new/NewProduct";
import OrderList from "./admin/pages/list/OrderList";
import WishScreen from "./pages/WishScreen";

function App() {
  const { productItems } = Data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        {/* <MessengerChat
          pageId="109268111769502"
          language="sv_SE"
          themeColor={"#000000"}
          bottomSpacing={300}
          loggedInGreeting="loggedInGreeting"
          loggedOutGreeting="loggedOutGreeting"
          greetingDialogDisplay={"show"}
          debugMode={true}
          onMessengerShow={() => {
            console.log("onMessengerShow");
          }}
          onMessengerHide={() => {
            console.log("onMessengerHide");
          }}
          onMessengerDialogShow={() => {
            console.log("onMessengerDialogShow");
          }}
          onMessengerDialogHide={() => {
            console.log("onMessengerDialogHide");
          }}
          onMessengerMounted={() => {
            console.log("onMessengerMounted");
          }}
          onMessengerLoad={() => {
            console.log("onMessengerLoad");
          }}
        /> */}
        <Header cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home productItems={productItems} onAdd={onAdd} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            }
          ></Route>
          <Route
            path="/store"
            element={<StorePages productItems={productItems} onAdd={onAdd} />}
          ></Route>
          <Route
            path="/details"
            element={
              <ProductDetails productItems={productItems} onAdd={onAdd} />
            }
          ></Route>
          <Route path="/track-order" element={<OrderHistoryScreen />}></Route>

          <Route path="/store-locations" element={<OurStores />}></Route>
          <Route path="/privacy-policy" element={<Privacy />}></Route>
          <Route path="/terms-and-conditons" element={<Terms />}></Route>

          {/* USER */}
          <Route path="/user-account" element={<UserProfile />}></Route>
          <Route path="/vendor-account" element={<VendorProfile />}></Route>
          <Route path="/wish-list" element={<WishScreen />}></Route>
          {/* USER */}

          {/* VALIDATION */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/forgot-password" element={<PasswordReset />}></Route>
          <Route path="/new-password" element={<PassResetForm />}></Route>
          <Route
            path="/account-verification"
            element={<AccountVerify />}
          ></Route>
          <Route path="/verify-success" element={<VerifySuccess />}></Route>
          {/* VALIDATION */}

          {/* CHECKOUT */}
          <Route path="/billing" element={<ShippingAddress />}></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/finish" element={<Finish />}></Route>
          {/* CHECKOUT */}

          {/* ADMIN ROUTES */}
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/users" element={<UserList />}></Route>
          <Route path="/admin/user/:userId" element={<UserInfo />}></Route>
          <Route path="/admin/user/new" element={<NewUser />}></Route>
          <Route path="/admin/user/:userId/edit" element={<UserEdit />}></Route>
          <Route path="/admin/vendors" element={<VendorList />}></Route>
          <Route path="/admin/products" element={<ProductList />}></Route>
          <Route path="/admin/product/new" element={<NewProduct />}></Route>
          <Route
            path="/admin/product/:productId/edit"
            element={<ProductEdit />}
          ></Route>
          <Route path="/admin/orders" element={<OrderList />}></Route>
          {/* ADMIN ROUTES */}
        </Routes>
        {/* <MessengerCustomerChat
          pageId="<PAGE_ID>"
          appId="<APP_ID>"
          htmlRef="<REF_STRING>"
        /> */}

        <FloatingWhatsApp phoneNumber="+2349160921639" accountName="Tunji" />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
