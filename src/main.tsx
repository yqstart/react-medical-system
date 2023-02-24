import React from "react";
import ReactDOM from "react-dom/client";
import 'reset-css'
import App from "./App";
import "./index.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import {HashRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ConfigProvider locale={zhCN}>
          <Routes>
              <Route path='/' element={ <Login /> }/>
              <Route path='/admin/*' element={ <App/> } />
          </Routes>
      </ConfigProvider>
    </HashRouter>
  </React.StrictMode>
);
