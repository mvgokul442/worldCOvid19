import React from 'react';

const styles = {
  width: '100%',
};
export default function Footer() {
  return (
    <footer
      id="sticky-footer"
      className="py-4 bg-dark text-white-50"
      style={styles}
    >
      <div className="container text-center">
        <small>
          Copyright &copy; World Covid19
          {` ${new Date().getFullYear()}`}
        </small>
      </div>
      <div style={{ float: 'right' }}>
        <small>Source : corona.lmao.ninja</small>
      </div>
    </footer>
  );
}
