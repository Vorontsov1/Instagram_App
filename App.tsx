import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import colors from './src/theme/colors.ts';






Amplify.configure(config);

const App = () => {
  return (

      <Navigation />

  );
};

const signUpConfig = {
  hideAllDefaults: true,

  signUpFields: [
    {
      label: 'Full name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
      placeholder: 'Enter your full name',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
      placeholder: 'Enter your email',
    },
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string',
      placeholder: 'Enter your username',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 1,
      type: 'string',
      placeholder: 'Enter your password',
    },
  ],
};

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  buttonDisabled: {
    ...AmplifyTheme.button,
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    fontSize: 17,
    color: '#5c78ff',
  },
};



export default withAuthenticator(App, {signUpConfig,  theme: customTheme});
