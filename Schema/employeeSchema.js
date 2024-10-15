import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  age: { type: Number },
  create_at: { type: Date, required: true },
});

const Employee = mongoose.model("employee", empSchema);

export default Employee;
