import React from 'react';

import { getAuth } from 'firebase/auth';
import app from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app)

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>This is Home</h2>
            <p>Current User is:{user? user.displayName : ' No body'} </p>
        </div>
    );
};

export default Home;