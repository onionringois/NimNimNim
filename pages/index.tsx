import "reflect-metadata"
import type { NextPage } from 'next'
import Home from './Home/Home'
import config from "../db/ormconfig";
import { createConnection } from "typeorm";

createConnection(config);

const App: NextPage = () => {
  return (
    <Home/>
  )
}

export default App
