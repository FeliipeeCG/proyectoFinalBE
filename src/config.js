export default Config = {
  firebase: {},
  mongodb: {
    url: "mongodb+srv://FeliipeeCG:<password>@feliipeecg.siypikh.mongodb.net/?retryWrites=true&w=majority",
    options: {
      serverSelectionTimeoutMS: 5000,
    },
  },
  mariadb: {
    client: "mysql",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      database: "coderhouseDB",
    },
  },
  sqlite: {
    client: "sqlite3",
    connection: {
      filename: "./src/db/ecommerce.sqlite3",
    },
    useNullAsDefault: true,
  },
};
