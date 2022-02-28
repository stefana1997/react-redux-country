const URL = process.env.REACT_APP_COUNTRY_API_URL;
const API_KEY = process.env.REACT_APP_COUNTRY_API_KEY
const timeout = 30000;

const Api = {
  getCountries: () => {
    return Promise.race([
      fetch(`${URL}/all?access_key=${API_KEY}`).then(res => res.json()),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
    ])
  },
  getCountry: async (name, fullText=true) => {
    return Promise.race([
      fetch(`${URL}/name/${name}?access_key=${API_KEY}&fullText=${fullText}`).then(res => res.json()),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
    ])
  },
};

export default Api;
