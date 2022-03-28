import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage'
import SearchPage from "./components/SearchPage";

function AppRouter() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;