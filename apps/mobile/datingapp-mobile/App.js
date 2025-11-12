// App.js (in project root)

import { AppRegistry } from 'react-native';
import App from './src/App'; // or './App' if in root
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
