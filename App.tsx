import React from 'react';
import Authentication from './src/containers/Authentication';
import SignupPage from './src/pages/Signup';

const App: React.FC = () => {
  return (
    <Authentication>
      <SignupPage />
    </Authentication>
  );
};

export default App;
