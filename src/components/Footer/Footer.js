import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 MyProfile. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#f2f2f2',
    marginTop: 'auto',
  }
};

export default Footer;
