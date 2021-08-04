const Category = require("../models/Category");

const categorieCtrl = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getCategorie: async (req, res) => {
    try {
      const categorie = await Category.find({ _id: req.params.id });
      res.json(categorie);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getCategorie: async (req, res) => {
    try {
      const categorie = await Category.find({ _id: req.params.id });

      res.json(categorie);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createCategorie: async (req, res) => {
    try {
      const { name } = req.body;

      const newCategorie = new Category({ name: name });
      await newCategorie.save();
      res.json(newCategorie);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateCategorie: async (req, res) => {
    try {
      const { name } = req.body;

      const Categorie = await Category.findByIdAndUpdate(
        { _id: req.params.id },
        { name: name }
      );

      res.json(Categorie);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteCategorie: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted a Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = categorieCtrl;

// IDS CATEGORIES 605f25d7a03796198cdbf525:605f25d7a03796198cdbf527:605f25d7a03796198cdbf528
