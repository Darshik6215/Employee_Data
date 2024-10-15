import dbConnect from "../Connection/DB_Connection.js";

const connection = (req, res, next) => {
  dbConnect();
  next();
};

export default connection;
