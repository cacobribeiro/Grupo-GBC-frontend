const findone = async () => {
  fetch('http://localhost:3001/').then((data) => data.json().then((json) => json));
};

export { findone };
