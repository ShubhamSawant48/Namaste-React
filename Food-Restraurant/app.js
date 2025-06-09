import React from "react";
import ReactDOM from "react-dom/client";
import myImages from "./assets/res-logo.png";
const myLogo = myImages.default || myImages; 

const Header = () => {
    console.log("Logo path:", myImages);
    return(
        <div className="header">
            <div className="res-logo">
                <img className="res-logo" src="https://www.shutterstock.com/shutterstock/photos/272549726/display_1500/stock-vector-restaurant-logo-creative-272549726.jpg"/>
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
    )
};

const AppLayout = () => {
    return (
    <div className="app">
        <Header />
    </div>
    )
};

export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);