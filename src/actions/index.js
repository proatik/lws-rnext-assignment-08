"use server";

import {
  createUser,
  updateFavourites,
  findUserByCredentials,
} from "@/lib/user";

export const registerUser = async (formData) => {
  try {
    const userData = Object.fromEntries(formData);
    const created = await createUser(userData);
    return created;
  } catch (error) {
    throw error;
  }
};

export const performLogin = async (formData) => {
  try {
    const { email, password } = Object.fromEntries(formData);
    const user = await findUserByCredentials({ email, password });
    return user;
  } catch (error) {
    throw error;
  }
};

export const toggleFavourites = async (recipeId, userId) => {
  try {
    return await updateFavourites(recipeId, userId);
  } catch (error) {
    console.log(error);
  }
};
