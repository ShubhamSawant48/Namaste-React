import React from "react";
import ReactDOM from "react-dom/client";
import myImages from "./assets/res-logo.png";
const myLogo = myImages.default || myImages;

const Header = () => {
  console.log("Logo path:", myImages);
  return (
    <div className="header">
      <div className="res-logo">
        <img
          className="res-logo"
          src="https://www.shutterstock.com/shutterstock/photos/272549726/display_1500/stock-vector-restaurant-logo-creative-272549726.jpg"
        />
      </div>
      <div className="navbar">
        <ul className="nav-li">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = () => {
  return (
    <div>
      <div className="resCard">
        <img
          src="https://as2.ftcdn.net/v2/jpg/04/36/36/57/1000_F_436365754_z3i5Es0sFmZuLY6GZIzdiU01v9HqpGZe.jpg"
          className="photos"
        ></img>
        <h2 style={{ padding: "0px" }}>Vrundavan</h2>
        <h3>Rating:4.5</h3>
        <h4>Biryani,North India,Chinese</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search" style={{ padding: "10px" }}>
        Search
      </div>
      <div className="bodyComponent">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
