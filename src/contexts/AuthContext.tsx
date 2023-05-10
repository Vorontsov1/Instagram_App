import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
} from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';



type UserType = CognitoUser | null | undefined;

type AuthContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};
 
const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});


const AuthContextProvider = ({ children }: { children: ReactNode }) => { 
    const [user, setUser] = useState<CognitoUser | null | undefined>(undefined);

   console.log('usr', user);
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    
    )
}

export default AuthContextProvider;
export const  useAuthContext = () => useContext(AuthContext);