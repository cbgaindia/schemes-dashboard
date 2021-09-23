import { useState, useEffect } from 'react';
import Footer from 'components/footer/footer';
import Skiplink from 'components/skiplink/skiplink';
import Header from 'components/header/header';
import styles from './layout.module.css';

export default function Layout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');

  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fadeOut');
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <>
      <Skiplink />
      <Header />

      <div
        onTransitionEnd={() => {
          if (transitionStage === 'fadeOut') {
            setDisplayChildren(children);
            setTransitionStage('fadeIn');
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div>
      <Footer />
    </>
  );
}
