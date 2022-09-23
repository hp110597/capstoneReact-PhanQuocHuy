import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import "./assets/scss/styles.scss";
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';


//Cấu hình history (chuyển hướng ko cần hook navigate)
export const history = createBrowserHistory({ window });





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <HistoryRouter history={history}>
    <Routes>
      <Route path="" element={<App />}>
        <Route index element={<Home />}></Route>
        <Route path="detail" >
          <Route path=":id" element={<Detail />}></Route>
        </Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
      </Route>
    </Routes>   
  </HistoryRouter>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
