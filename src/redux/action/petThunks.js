// petThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addPetApi, updatePetImagesApi } from '../api/petApi'; // Replace with your actual API calls
import { ADD_PET, UPDATE_PET_IMAGES } from './petAction';

// Thunk to add a pet
export const addPet = createAsyncThunk(ADD_PET, async (petData) => {
  const response = await addPetApi(petData);
  return response.data;
});

// Thunk to update pet images
export const updatePetImages = createAsyncThunk(UPDATE_PET_IMAGES, async ({ petIndex, imageUrls }) => {
  const response = await updatePetImagesApi(petIndex, imageUrls);
  return { petIndex, imageUrls };
});
