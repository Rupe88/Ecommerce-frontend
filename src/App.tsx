import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>THis is Home page</h1>} />
            <Route path="/register" element={<h1>this is register page</h1>} />
            <Route path="/login" element={<h1>this is login page</h1>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
