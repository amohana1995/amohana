
/*
* This is the start point of the app on the Android platform
* You can ignore this file since it only links to the src/Main.js file*/
import { AppRegistry } from 'react-native';
import Main from './src/Main';
import App from './src/App';
/*import { YellowBox } from 'react-native';
 YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
*/
import {I18nManager} from 'react-native';

I18nManager.allowRTL(false)

AppRegistry.registerComponent('Franchise2', () => App);
