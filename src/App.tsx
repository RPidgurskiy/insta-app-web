import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';
import {Layout, Sidebar} from "./components";
import {Home} from './pages';

function App() {
    return (
        <div className="App">
            <Layout>
                <Sidebar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
