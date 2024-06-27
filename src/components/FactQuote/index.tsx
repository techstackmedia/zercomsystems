import React from 'react';
import styles from './index.module.css';

const FactQuote: React.FC = () => {
  return (
    <div className={styles.factQuote}>
      <p className={styles.quote}>
      &quot;Nigeria and Africa has a massive network effect that have not be fully utilized. With
        Nigerians/Africans in every country and territory of the world, we can scale an African
        business to 100+ countries in few weeks&quot;
      </p>
      <p className={styles.author}>
        Daniel Izeghs Oratokhai
      </p>
      <p className={styles.position}>
        Managing Partner at SINC Partners Ltd
      </p>
    </div>
  );
};

export default FactQuote;
