import mongoose from "mongoose";

const dbConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017/company");
};

dbConnect()
  .then(() => console.log("Connection Successfully."))
  .catch((error) => console.log("Connection Error"));
  
export default dbConnect;
