import mongoose from "mongoose";

// database connection.
import { connectDatabase } from "@/services/mongo";

// recipe model.
import Recipe from "@/models/recipes";

// utility functions.
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils";

export const getAllRecipes = async () => {
  try {
    const connection = await connectDatabase();
    const recipes = await Recipe.find().lean();

    return replaceMongoIdInArray(recipes);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getRecipeById = async (recipeId) => {
  try {
    const isValidId = mongoose.Types.ObjectId.isValid(recipeId);
    if (!isValidId) return null;

    const connection = await connectDatabase();
    const recipe = await Recipe.findOne({ _id: recipeId }).lean();

    return replaceMongoIdInObject(recipe);
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getRecipesByCategory = async (categoryName) => {
  try {
    const connection = await connectDatabase();
    const recipes = await Recipe.find({ category: categoryName }).lean();

    return replaceMongoIdInArray(recipes);
  } catch (error) {
    console.log(error);
    return [];
  }
};
