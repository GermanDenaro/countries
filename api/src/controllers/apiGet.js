const axios = require('axios');
const { Country } = require('../db.js');

async function getAll(req, res) {
  let countries = await Country.findAll({
    where: {},
  });
  if (countries.length == 0) {
    addToDb(res);
    countries = await Country.findAll({
      where: {},
    });
    return res.json(countries);
  } else {
    return res.json(countries);
  }
}

async function addToDb(res) {
  axios.get('https://restcountries.com/v3/all').then(async function (response) {
    try {
      const data = response.data;
      // console.log('🚀 ~ file: apiGet.js ~ line 7 ~ data', data[0]);
      if (response) {
        for (let i = 0; i < response.data.length; i++) {
          if (data[i]['capital'] && data[i].hasOwnProperty('capital')) {
            Country.create({
              name: data[i].name.common,
              id: data[i].cca3,
              countryFlag: data[i].flags.find((e) => e.includes('png')),
              continent: data[i].region,
              capital: data[i].capital[0],
              subRegion: data[i].subregion,
              area: data[i]['area'],
            });
          }
        }
      }
    } catch (error) {
      return res
        .status(500)
        .send('No se pudo cargar en la base de datos', error);
    }
  });
}

module.exports = {
  getAll,
};
