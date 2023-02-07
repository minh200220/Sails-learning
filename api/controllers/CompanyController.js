module.exports = {
  async create(req, res) {
    try {
      let { name, city, address } = req.allParams();
      if (!name) {
        return res.badRequest({ error: 'Name is required!'});
      }

      const results = await Company.create({ name, city, address });
      return res.ok(results);
    } catch (error) {
      return res.serverError(error);
    }
  },
  async find(req, res) {
    try {
      const results = await Company.find();
      return res.ok(results);
    } catch (error) {
      return res.serverError(error);
    }
  },
  async findOne(req, res) {
    try {
      let id = req.params.id;
      const results = await Company.findOne({ id });
      return res.ok(results);
    } catch (error) {
      return res.serverError(error);
    }
  },
  async update(req, res) {
    try {
      let {id, ...newVals} = req.allParams();
      const results = await Company.update({ id }, newVals);
      return res.ok(results);
    } catch (error) {
      return res.serverError(error);
    }
  },
  async delete(req, res) {
    try {
      let id = req.params.id;
      const results = await Company.destroy({ id });
      return res.ok(results);
    } catch (error) {
      return res.serverError(error);
    }
  },

};
