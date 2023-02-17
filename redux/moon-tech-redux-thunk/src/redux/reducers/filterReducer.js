import { TOGGLE_BRAND, TOGGLE_STOCK } from '../actionTypes/actionTypes';

const initialState = {
  filters: {
    brands: [],
    stock: false,
  },
  keyword: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STOCK:
      return {
        ...state,
        filters: {
          ...state.filters,
          stock: !state.filters.stock,
        },
      };
    case TOGGLE_BRAND:
      if (state.filters.brands.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: state.filters.brands.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }

      return {
        ...state,
        filters: {
          ...state.filters,
          brands: [...state.filters.brands, action.payload],
        },
      };

    default:
      return state;
  }
};
