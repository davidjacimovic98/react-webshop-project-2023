import { useAuth0 } from '@auth0/auth0-react';
import styles from './AuthWrapper.module.css';
import React from 'react';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <section className={styles.loading_container}>
        <h1>Loading...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.loading_container}>
        <h1>{error.message}</h1>
      </section>
    );
  }
  return <>{children}</>;
};

export default AuthWrapper;
