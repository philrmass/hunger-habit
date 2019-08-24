import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ExportModal.module.css';


function save(data) {
  console.log('SAVE');
  const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url
  a.download = 'weightData.json';
  document.body.appendChild(a);
  a.click();
  console.log('BLOB', blob, url);
  setTimeout(function() {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log('DELETE');
  }, 0);
}

function ExportModal({ weights, close }) {
  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <div className={styles.modal}>
          <div>
            <button onClick={() => save(weights)}>Save</button>
          </div>
          <div>
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ExportModal.propTypes = {
  weights: PropTypes.arrayOf(PropTypes.object),
  close: PropTypes.func,
};

export default ExportModal;
