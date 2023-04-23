import { createSlice } from "@reduxjs/toolkit";

const bookStoreSlice = createSlice({
  name: "bookStore",
  initialState: {
    bookList: [],
    currentBook: {},
    loading: false,
  },
  reducers: {
    fetchAllBooks: (state, action) => {
      state.bookList = action.payload;
    },
    currentBook: (state, action) => {
      state.currentBook = action.payload;
    },
  },
  extraReducers: {},
});

export const bookStoreActions = bookStoreSlice.actions;
export default bookStoreSlice.reducer;
