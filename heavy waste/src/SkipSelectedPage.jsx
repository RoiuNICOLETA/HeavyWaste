// const skips = [
//     { id: 17933, size: 4, hire_period_days: 14, price_before_vat: 277.95, vat: 20 },
//     { id: 17934, size: 6, hire_period_days: 14, price_before_vat: 305.15, vat: 20 },
//     { id: 17935, size: 8, hire_period_days: 14, price_before_vat: 374.85, vat: 20 },
//     { id: 17936, size: 10, hire_period_days: 14, price_before_vat: 399.5, vat: 20 },
//     { id: 17937, size: 12, hire_period_days: 14, price_before_vat: 438.6, vat: 20 },
//     { id: 17938, size: 14, hire_period_days: 14, price_before_vat: 470.05, vat: 20 },
//     { id: 17939, size: 16, hire_period_days: 14, price_before_vat: 496.4, vat: 20 },
//   ];

//   const SkipSelectPage = () => {
//     return (
//       <div style={{ padding: '2rem', background: '#000', color: '#fff', minHeight: '100vh' }}>
//         <h2 style={{ textAlign: 'center' }}>Choose Your Skip Size</h2>
//         <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
//           Select the skip size that best suits your needs
//         </p>
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
//           {skips.map((skip) => {
//             const totalPrice = skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100;
  
//             return (
//               <div
//                 key={skip.id}
//                 style={{
//                   background: '#1e1e1e',
//                   borderRadius: '12px',
//                   padding: '1rem',
//                   width: '250px',
//                   boxShadow: '0 0 10px rgba(255,255,255,0.1)',
//                 }}
//               >
//                 <div style={{ height: '140px', background: '#333', borderRadius: '8px', marginBottom: '1rem' }}></div>
//                 <h3>{skip.size} Yard Skip</h3>
//                 <p>{skip.hire_period_days} day hire period</p>
//                 <p style={{ color: '#4cafef', fontWeight: 'bold' }}>£{totalPrice.toFixed(2)} per week</p>
//                 <button
//                   style={{
//                     marginTop: '1rem',
//                     width: '100%',
//                     padding: '0.6rem',
//                     backgroundColor: '#4cafef',
//                     border: 'none',
//                     borderRadius: '8px',
//                     color: '#000',
//                     fontWeight: 'bold',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   Select This Skip →
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };
  
//   export default SkipSelectPage;


import styles from "./SkipSelectedPage.module.css";
import skipImage from "./assets/skip-image.png";

const skips = [
  { id: 17933, size: 4, hire_period_days: 14, price_before_vat: 277.95, vat: 20 },
  { id: 17934, size: 6, hire_period_days: 14, price_before_vat: 305.15, vat: 20 },
  { id: 17935, size: 8, hire_period_days: 14, price_before_vat: 374.85, vat: 20 },
  { id: 17936, size: 10, hire_period_days: 14, price_before_vat: 399.5, vat: 20 },
  { id: 17937, size: 12, hire_period_days: 14, price_before_vat: 438.6, vat: 20 },
  { id: 17938, size: 14, hire_period_days: 14, price_before_vat: 470.05, vat: 20 },
  { id: 17939, size: 16, hire_period_days: 14, price_before_vat: 496.4, vat: 20 },
];

const SkipSelectPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Choose Your Skip Size</h2>
      <p className={styles.subheading}>
        Select the skip size that best suits your needs
      </p>
      <div className={styles.grid}>
        {skips.map((skip) => {
          const totalPrice = skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100;

          return (
            <div key={skip.id} className={styles.card}>
              <img src={skipImage} alt="Skip" className={styles.image} />
              <h3>{skip.size} Yard Skip</h3>
              <p>{skip.hire_period_days} day hire period</p>
              <p className={styles.price}>£{totalPrice.toFixed(2)} per week</p>
              <button className={styles.button}>Select This Skip →</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkipSelectPage;
