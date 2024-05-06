// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { Navigate, Route as ReactRoute, Switch } from 'react-router';
// import Home from './components/Home';
// import ProductListing from './components/ProductListing';
// import Cart from './components/Cart';

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Navigation/Header (can be a separate component) */}
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/products">Products</Link></li>
//             <li><Link to="/cart">Cart</Link></li>
//           </ul>
//         </nav>

//         {/* Main Content */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<ProductListing />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import ProductListing from './components/ProductListing';
// import Cart from './components/Cart';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<ProductListing />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Cart from './components/Cart';

// function App() {
//   return (
//     <div className="wrapper">
//       {/* <h1>Marine Mammals</h1> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/home" component={Home} />
//           <Route path="/Cart" component={Cart} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import Cart from './components/Cart';
import Categories from './components/Categories';
import Film from "./components/Film";
// import ShoppingCart from './components/ShoppingCart';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        {/* <Route path = "/cart" element={<ShoppingCart/>} /> */}
        <Route path = "/categories" element = {<Categories/>} />
        <Route path = "/films" element = {<Film/>} />
      </Routes>
    </BrowserRouter>
  );
}