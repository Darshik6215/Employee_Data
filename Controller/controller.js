import Employee from "../Schema/employeeSchema.js";

const dataController = {
  async getData(req, res) {
    const data = await Employee.find();
    res.render("index", { data });
  },
  async createGetData(req, res) {
    res.render("createEmployee");
  },
  async showGetData(req, res) {
    let { id } = req.params;
    let data = await Employee.findById(id);
    res.render("show", { data });
  },
  async postData(req, res) {
    let { name, email, age } = req.body;
    let data = new Employee({
      name: name,
      email: email,
      age: age,
      create_at: new Date(),
    });
    await data.save();
    res.redirect("/emp");
  },
  async editData(req, res) {
    let { id } = req.params;
    let data = await Employee.findById(id);
    res.render("edit", { data });
  },
  async putData(req, res) {
    let { id } = req.params;
    let { email } = req.body;
    await Employee.findByIdAndUpdate(id, { email });
    res.redirect("/emp");
  },
  async deleteData(req, res) {
    let { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.redirect("/emp");
  },
};

export default dataController;
