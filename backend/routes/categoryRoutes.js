const router = require("express").Router();
const categoryCtrl = require("../controller/categorieCtrl");

router.route("/categorie").get(categoryCtrl.getCategories).post(categoryCtrl.createCategorie);

router.route("/categorie/:id").get(categoryCtrl.getCategorie).put(categoryCtrl.updateCategorie).delete(categoryCtrl.deleteCategorie);

module.exports = router;
