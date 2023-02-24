import './App.css'
import MyLayout from "./components/MyLayout";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import User from "./pages/user";
import MedicalCategories from "./pages/medical/categories";
import MedicalInfo from "./pages/medical/info";
import ArticleCategories from "./pages/articles/categories";
import ArticleInfo from "./pages/articles/info";

const App = () => {
    return (
    <MyLayout>
        <Routes>
            <Route path='dashboard' element={ <Dashboard />}/>
            <Route path='medical/categories' element={ <MedicalCategories />}/>
            <Route path='medical/info' element={ <MedicalInfo />}/>
            <Route path='article/categories' element={ <ArticleCategories />}/>
            <Route path='article/info' element={ <ArticleInfo />}/>
            <Route path='user' element={ <User />}/>
        </Routes>
    </MyLayout>
  )
}

export default App
