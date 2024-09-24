// petReducer.js
import { ADD_PET,  } from '../action/petAction';

const initialState = {
  pets: [
    {
      name: '',
      breed: '',
      age: '',
      sex: '',
      address: '',
      vaccinated: '',
      year: '',
      status: 'For Sale',
      petImages:'',
    },
  ],
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PET:
      return {
        ...state,
        pets: [...state.pets, action.payload],
      };

      case 'UPDATE_PET_IMAGES':
        const { petIndex, imageUrls } = action.payload;
        const updatedPets = [...state.pets];
        updatedPets[petIndex].petImages = imageUrls;
        return {
          ...state,
          pets: updatedPets,
        };
   
    default:
      return state;
  
  }
};

export default petReducer;