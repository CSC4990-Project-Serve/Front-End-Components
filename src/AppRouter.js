import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage'
import SearchPage from "./components/SearchPage";
import RestaurantPage from "./components/RestaurantPage";
import AdminPage from "./components/AdminPage";

function AppRouter() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/search/:id" element={<RestaurantPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;