//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import bg from '../assets/images/HomeScreenBackgroundImage.jpeg';

//import { HomeScreen } from 'shared/components';
import { HomeScreen } from 'shared';


function App() {
  return <HomeScreen background={bg} />;
}

export default App;