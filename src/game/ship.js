const Ship = (length) => {
  let hits = 0;
  return {
    getLength: () => length,
    getHits: () => hits,
    hit: () => {
      if (hits < length) hits++;
    },
    isSunk: () => hits >= length,
  };
};

module.exports = Ship;
