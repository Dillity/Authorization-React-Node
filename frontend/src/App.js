import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {LoginContainer} from "./Components/Login/LoginContainer";
import {RegistrationContainer} from "./Components/Registration/RegistrationContainer";
import {SecretContainer} from "./Components/Secret/SecretContainer";


function App() {
    return (
        <div>
            <Routes>
                <Route element={<LoginContainer />} path={'/'} />
                <Route element={<RegistrationContainer />} path={'/register'} />
                <Route element={<SecretContainer />} path={'/secret'} />
            </Routes>
        </div>
    );
}

export default App;
