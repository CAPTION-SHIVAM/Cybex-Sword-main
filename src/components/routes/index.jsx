import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../Login/Login";
import Blog from "../Blog/Blog";
import Home from "./../Home/Home";
import Signup from "../Signup/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="blog" element={<Blog />} />
    </Route>
  )
);

export default router;
