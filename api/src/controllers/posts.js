const { Country } = require('../db.js');

const { TouristicActivity } = require('../db');

async function addActivity(req, res) {
  const { name, difficulty, duration, station, countryId } = req.body;
  try {
    if (Array.isArray(countryId)) {
      if (countryId.length > 0) {
        for (let i = 0; i < countryId.length; i++) {
          const [TouristicActivity] = await TouristicActivity.findOrCreate({
            where: { name, difficulty, duration, station },
          });
          const id = countryId[i].toUpperCase();
          const country = await Country.findOne({ where: { id: id } });
          if (country) country.addTouristActivities(TouristicActivity);
          return res.sendStatus(200);
        }
      }
    }
    const [TouristicActivity] = await TouristicActivity.findOrCreate({
      where: { name, difficulty, duration, station },
    });
    const id = countryId.toUpperCase();
    const country = await Country.findOne({ where: { id: id } });
    if (country) country.addTouristActivities(TouristicActivity);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  addActivity,
};
