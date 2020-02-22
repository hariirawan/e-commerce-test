import React from "react";
import { useSelector } from "react-redux";

function App() {
  const store = useSelector(state => state);
  console.log(store);

  return <div className="App">E-Commerce</div>;
}

export default App;
