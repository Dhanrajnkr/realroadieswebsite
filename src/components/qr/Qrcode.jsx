import React from 'react'
import qr from '../../assets/images/transperent-qrcode.png';

const Qrcode = () => {
  return (
    <div style={styles.qr}>
      <div style={styles.qrContent}>
        <img src={qr} alt="QR Code" style={styles.qrCode} />
        <div style={styles.qrtext}>scan &<br />download</div>
      </div>
    </div>

  );
};

export default Qrcode

const styles = {
qr: {
  position: 'fixed',
  bottom: '10%',
  right: '5%',
  backgroundColor: 'rgba(8, 8, 8, 0.8)',
  padding: '10px 15px',
  display: 'flex',
  border: '0.5px solid #5a5a5a',
  boxshasow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
},
qrContent: {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
},
qrCode: {
  width: '4rem',
  height: '4rem',
},
qrtext: {
  color: 'white',
  fontSize: '16px',
  fontWeight: '500',
  marginLeft: '5px',
},

};