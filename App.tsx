import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';




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


export default withAuthenticator(App, { signUpConfig });
