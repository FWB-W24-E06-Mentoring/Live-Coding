import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/PageNotFound";
import SingleUser from "./components/SingleUser";

//SPA (single page application)

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <BrowserRouter>
      <h1 onClick={() => setCounter(counter + 1)}>
        Basic React Routing :counter value : {counter}
      </h1>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />}>
          <Route
            index
            element={<h1>your nested content will be displayed here</h1>}
          />
          <Route path=":id" element={<SingleUser />} />
        </Route>
        {/* dynamic routing */}
        {/*  <Route path="/users/:id" element={<SingleUser/> } /> */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
