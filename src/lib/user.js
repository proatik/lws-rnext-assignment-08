// database connection.
import { connectDatabase } from "@/services/mongo";

// user and recipe models.
import User from "@/models/users";
import Recipe from "@/models/recipes";

export const createUser = async (user) => {
  const connection = await connectDatabase();
  const found = await User.findOne({ email: user.email }).lean();

  if (!found) {
    const created = await User.create(user);

    return {
      firstName: created.firstName,
      lastName: created.lastName,
      email: created.email,
      favourites: created.favourites,
    };
  }
  return null;
};

export const findUserByCredentials = async (credentials) => {
  const connection = await connectDatabase();
  const user = await User.findOne(credentials).lean();

  if (user) {
    return {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      favourites: user.favourites,
    };
  }
  return null;
};

export const updateFavourites = async (recipeId, userId) => {
  try {
    const connection = await connectDatabase();
    const user = await User.findById(userId);
    const recipe = await Recipe.findById(recipeId);

    if (user && recipe) {
      const check = user.favourites.includes(recipeId);

      if (check) {
        user.favourites.pull(recipeId);
      } else {
        user.favourites.push(recipeId);
      }

      await user.save();

      return user.favourites;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
