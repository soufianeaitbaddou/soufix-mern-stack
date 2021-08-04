require("dotenv").config();

const categoriesData = require("./data/categoriesData");
const postsData = require("./data/postsData");
const connectDB = require("./config/db");
const Category = require("./models/Category");
const Post = require("./models/Post");

connectDB();

const importData = async () => {
  try {
    // await Category.deleteMany({});

    // await Category.insertMany(categoriesData);

    await Post.deleteMany({});

    await Post.insertMany(postsData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
