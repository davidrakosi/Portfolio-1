import React from 'react';

const Copyright = () => {
  return (
    <footer className="pt-5 px-4 pb-4 text-center bg-light">
      <span style={styles.copyright}>DC</span>
      <p className="mt-5">Copyright &copy; 2020 | Daniel Cortild</p>
    </footer>
  )
}

const styles = {
  copyright: {
    background: "rgba(255, 103, 68, 0.91)", 
    borderRadius: "50%", 
    color: "#FFF",
    fontFamily: "'Maven pro', sans-serif",
    fontSize: "1.4em",
    padding: ".4em"
  }
}

export default Copyright;
