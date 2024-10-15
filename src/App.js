import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchScreen from "./components/SearchScreen";
import DeckScreen from "./components/DeckScreen";
import SlideshowScreen from "./components/SlideshowScreen";
import EditDeckScreen from "./components/EditDeckScreen";
import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path={"/"} element={<HomeScreen />} />
                <Route path={"/search"} element={<SearchScreen />} />
                <Route path="/deck" element={<DeckScreen />} />
                <Route path="/slideshow" element={<SlideshowScreen />} />
            </Routes>
        </>
    );
}

export default App;
