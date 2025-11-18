//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

const bg = "/HomeScreenBackgroundImage.jpeg";

import { HomeScreen } from 'shared';


function App() {
  return <HomeScreen background={{ uri: bg }} />;
}

export default App;