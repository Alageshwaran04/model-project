import React from "react";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
function HomePage(){
    return(
        <div>
            <RegisterPage/>
            <LoginPage/>
        </div>
    );

}
export default HomePage;