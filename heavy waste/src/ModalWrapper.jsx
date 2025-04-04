
import styles from './ModalWrapper.module.css';

// eslint-disable-next-line react/prop-types
const ModalWrapper = ({ children, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default ModalWrapper;