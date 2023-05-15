import Navigation from './src/navigation';
import {Linking} from 'react-native';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
import InAppBrowser from 'react-native-inappbrowser-reborn';


const urlOpener = async (url: string, redirectUrl: string) => {
  try {
    await InAppBrowser.isAvailable();
    const response = await InAppBrowser.openAuth(url, redirectUrl, {
      showTitle: false,
      enableUrlBarHiding: true,
      enableDefaultShare: false,
      ephemeralWebSession: false,
    });

    if (response.type === 'success') {
      Linking.openURL(response.url);
    }
  } catch (error) {
    console.error('Failed to open URL', error);
  }
};

const updatedConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: 'mychat://',
    redirectSignOut: 'mychat://',
    urlOpener,
  }
}
Amplify.configure(updatedConfig);

const App = () => {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
};

export default App;
