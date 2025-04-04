import { useState } from "react";
import styles from "./HeavyWasteModal.module.css";

const heavyWasteTypes = [
  { label: "Soil", description: "Including topsoil and subsoil" },
  { label: "Concrete", description: "Blocks, slabs, and foundations" },
  { label: "Bricks", description: "Whole or broken bricks" },
  { label: "Tiles", description: "Ceramic, porcelain, or stone tiles" },
  { label: "Sand", description: "Building or garden sand" },
  { label: "Gravel", description: "Stone and aggregate" },
  { label: "Rubble", description: "Mixed construction debris" },
];

// eslint-disable-next-line react/prop-types
const HeavyWasteModal = ({ onCancel, onContinue }) => {
  const [selected, setSelected] = useState([]);

  const toggleSelection = (label) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className={styles.modal}>
      <h2>Heavy Waste Types</h2>
      <div className={styles.notice}>
        <strong>⚠️ Important Notice:</strong>
        <br />
        Heavy waste types have specific requirements and restrictions. Some skip
        sizes may not be available for heavy waste disposal.
      </div>
      <p>Please select any heavy waste types you need to dispose of:</p>

      <div className={styles.optionsGrid}>
        {heavyWasteTypes.map(({ label, description }) => (
          <div
            key={label}
            className={`${styles.option} ${
              selected.includes(label) ? styles.selected : ""
            }`}
            onClick={() => toggleSelection(label)}
          >
            <input
              type="checkbox"
              checked={selected.includes(label)}
              readOnly
            />
            <div>
              <strong>{label}</strong>
              <div className={styles.description}>{description}</div>
            </div>
          </div>
        ))}
        <div />
      </div>
      <div className={styles.bottModal}>
        <div className={styles.restrictionsBox}>
          <span className={styles.infoIcon}>ℹ️</span>

          <div>
            <strong>Skip Size Restrictions</strong>
            <br />
            For safety reasons, heavy waste can only be disposed of in skips up
            to 8 yards. Larger skips will not be available if heavy waste is
            selected.
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.continueBtn} onClick={onContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeavyWasteModal;
