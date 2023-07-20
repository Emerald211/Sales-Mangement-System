import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./routes/dashboard/dashboard.component";
import Home from "./routes/home/home.component";
import Signin from "./routes/sign-in/sign-in.component";
import {
  addProductsCollectionandDocuments,
  addUserCollectionandDocuments,
  getDocumentsFromCollection,
  getProductsCollectionandDocuments,
} from "./utils/firebase/firebase";
import { customOnAUthStateChange } from "./utils/firebase/firebase";
import Orders from "./routes/orders/orders.component.";
import { useDispatch} from "react-redux";
import { setCurrentUser } from "./store/user/user.action";
import { setOrders } from "./store/orders/orders.action";
import Inbox from "./routes/inbox/inbox.component";
import Users from "./routes/users/user.component";
import Products from "./routes/products/product.component";
import { setProduct } from "./store/product/product.action";



function App() {


  // console.log(orders[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = customOnAUthStateChange((user) => {
      dispatch(setCurrentUser(user));
    });

    // addCollectionandDocuments('inventory')
    // addUserCollectionandDocuments('users')
    // addProductsCollectionandDocuments('products')

    return unsubscribe;
  }, []);

  useEffect(() => {
    const getRes = async () => {
      const data = await getDocumentsFromCollection();

      console.log(data);

      dispatch(setOrders(data));

      return data;
    };

    return getRes
  }, []);

  useEffect(() => {
    const getRes = async () => {
      const data = await getProductsCollectionandDocuments()

      console.log(data);

      dispatch(setProduct(data));

      return data;
    };

    return getRes
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<Signin />} path="/"></Route>
        <Route element={<Home />} path="/home">
          <Route index element={<Dashboard />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="inbox" element={<Inbox />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
