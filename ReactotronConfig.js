import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

import { NativeModules } from 'react-native';
import url from 'url';

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

Reactotron
  .configure()
  .useReactNative()
  .use(reactotronRedux())
  .connect();
