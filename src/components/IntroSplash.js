import React, { useEffect, useState } from 'react';
import styles from './IntroSplash.module.css';
import logo from '@site/static/img/zimble-logo_green.ab021e92.png'; // replace with your actual logo path

export default function IntroSplash({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000); // hide after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? (
        <div className={styles.splashContainer}>
          <div className={styles.logoAnimation}>
            <img src={logo} alt="Zimble Logo" className={styles.logoImage} />
            <div className={styles.glowLine}></div>
          </div>
        </div>
      ) : (
        <div className={styles.pageContent}>{children}</div>
      )}
    </>
  );
}
