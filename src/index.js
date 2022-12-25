const { PORT, express } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require("./router/index");
const db = require("./models/index");
const { City, airport } = require("./models/index");

const setupAndStartServer = async () => {
  //Creating express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server Strted at the Port :${PORT} `);
  });

  if (process.env.SYNC_DB) {
    db.sequelize.sync({ alter: true });
  }

  //   const city = await City.findOne({
  //     where: {
  //       id: 14,
  //     },
  //   });

  //   const airports = await city.getAirports();
  //   console.log(city, airports);

  //   const newAirport = await airport.create({
  //     name: "Vijaywada Airport",
  //     cityId: 14,
  //   });

  //   const newAirport = await airport.findOne({
  //     where: {
  //       cityId: 32,
  //     },
  //   });

  //   await city.addAirport(newAirport);

  //   console.log(newAirport);

  //   const city = await City.findOne({
  //     where: {
  //       id: 14,
  //     },
  //   });
  //   const airports = await city.getAirports();
  //   console.log(city, airports);
};

setupAndStartServer();
