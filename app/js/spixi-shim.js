window.Spixi = window.Spixi || {
  storage: {
    get: async (k) => JSON.parse(localStorage.getItem('spx:'+k)||'null'),
    set: async (k, v) => localStorage.setItem('spx:'+k, JSON.stringify(v))
  }
};