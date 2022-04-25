import "reflect-metadata"
import type { NextPage } from 'next'
import Home from './Home/Home'
import { ToastContainer } from "react-toastify"
// import config from "../db/config/base.ormconfig";
// import { createConnection } from "typeorm";

// createConnection(config);

const App: NextPage = () => {
  return (<> 
    <Home/>
    <ToastContainer position="bottom-left"/>
  </>
  )
}

export default App
