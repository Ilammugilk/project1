import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Myuser from "./basic/user";
import Mybook from "./basic/book";
import Myproduct from "./basic/project";
import Itemlist from "./basic/item";
import HookOne from "./hooks/page1";
import HookTwo from "./hooks/page2";
import HookThree from "./hooks/page3";
import HookFour from "./hooks/page4";
import ApiOne from "./api/api1";
import HookFive from "./hooks/hook5";
import BlogApi from "./api/blog";
import BlogOne from "./api/blog1";
import ManageUser from "./api/userapi";
import Book from "./api/bookapi";
import BlogTwo from "./api/blog2";
import Hook from "./hooks/hook2"; 
import UserDetails from "./api/userdetails";

function App() {
  return (
    <HashRouter>
      <header>
        <Link to="/" className="toplink">Manage User</Link>
        <Link to="/book-list" className="toplink">Manage Book</Link>
        <Link to="/product-list" className="toplink"> Manage Product</Link>
        <Link to="/myitem" className="toplink"> Props</Link>
        <Link to="/Hooks" className="toplink"> H-1</Link>
        <Link to="/Hooksix" className="toplink">Hook</Link>
        <Link to="/Hook" className="toplink"> H-2</Link>
        <Link to="/HookThree" className="toplink"> H-3</Link>
        <Link to="/HookFour" className="toplink"> H-4</Link>
        <Link to="/ApiOne" className="toplink">Api-1</Link>
        <Link to="/HookFive" className="toplink">H-5</Link>
        <Link to="/blog" className="toplink">Blog</Link>
        <Link to="/blogone" className="toplink">b-1</Link>
        <Link to="/blogtwo" className="toplink">B-2</Link>
        <Link to="/manageuser" className="toplink">Api-2</Link>
        

      </header>
      <Routes>
         <Route exact path="/" element={<Myuser/>}/>
         <Route exact path="/book-list" element={<Mybook/>}/>
         <Route exact path="/product-list" element={<Myproduct/>}/>
         <Route exact path="/myitem" element={<Itemlist/>}/>
         <Route exact path="/Hooks" element={<HookOne/>}/>
         <Route exact path="Hooksix" element={<Hook/>}/>
         <Route exact path="/Hook" element={<HookTwo/>}/>
         <Route exact path="/HookThree" element={<HookThree/>}/>
         <Route exact path="/HookFour" element={<HookFour/>}/>
         <Route exact path="/ApiOne" element={<ApiOne/>}/>
         <Route exact path="/HookFive" element={<HookFive/>}/>
         <Route exact path="/blog" element={<BlogApi/>}/>
         <Route exact path="/blogone" element={<BlogOne/>}/>
         <Route exact path="/blogtwo" element={<BlogTwo/>}/>
         <Route exact path="/manageuser" element={<ManageUser/>}/>
         <Route exact path="/bookapi" element={<Book/>}/>
         <Route exact path="/details/:userid" element={<UserDetails/>}/>
      </Routes>
    </HashRouter>
    
  );
}

export default App;

/*
Myuser(); - call a function in js
<Myuser/> - call a component in react jsxi
*/
