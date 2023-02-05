import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/NotificationList";
import AddProduct from "./components/AddNotification";
import EditProduct from "./components/EditNotification";

function App() {
  return (
      <Router>
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Routes>
                <Route exact path="/" element={<ProductList />}>
                </Route>
                <Route path="/add" element={<AddProduct />}>
                </Route>
                <Route path="/edit/:id" element={<EditProduct />}>
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;