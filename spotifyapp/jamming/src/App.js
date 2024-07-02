import React from "react";
import "./componants/css/app.css"
import Header from "./componants/header";
import Main from "./componants/main";

function App() {
  return (
    <div className='container'>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
