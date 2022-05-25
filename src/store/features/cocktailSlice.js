import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const getCocktails = createAsyncThunk(
  'cart/getCocktails',
  async (name) => {
    try {
      // console.log(url + name)
      const response = await axios(url + name)
      return response.data.drinks
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState = {
  cocktail: [],
  favourite: [],
  selectedCocktail: {},
}

const cockTailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    setFavourite: (state, { payload }) => {
      state.favourite = payload
    },
  },
  extraReducers: {
    [getCocktails.fulfilled]: (state, action) => {
      state.cocktail = action.payload
    },
    [getCocktails.rejected]: (state) => {
      console.log('error happened')
    },
  },
})

export const { setFavourite } = cockTailSlice.actions

export default cockTailSlice.reducer
