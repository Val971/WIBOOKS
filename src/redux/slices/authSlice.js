import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import { auth, db } from "../../firebase.config";

export const logIn =
  ({ values }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    return signInWithEmailAndPassword(auth, values.email, values.password)
      .then((response) => {
        dispatch(
          setUser({
            id: response.user.uid,
            email: response.user.email,
            userName: response.user.displayName,
          })
        );
      })
      .catch((err) => dispatch(setError(err.message)))
      .finally(() => dispatch(setLoading(false)));
  };

export const logOut = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    signOut(auth).then((res) => {
      dispatch(setUser({}));
      dispatch(setLoading(false));
    });
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};
export const register =
  ({ values }) =>
  async (dispatch) => {
    const usersCollection = collection(db, "users");
    try {
      dispatch(setLoading(true));
      createUserWithEmailAndPassword(auth, values.email, values.password).then(
        async (response) => {
          await updateProfile(auth.currentUser, {
            displayName: values.userName,
          }).then(async (res) => {
            const newUser = {
              id: response.user.uid,
              email: response.user.email,
              userName: response.user.displayName,
            };
            await addDoc(usersCollection, newUser).then((res) => {
              dispatch(setUser({}));
              dispatch(setLoading(false));
            });
          });
        }
      );
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    address: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setUserAddress: (state, action) => {
      state.address = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setUser, setLoading, setError, setUserAddress } =
  authSlice.actions;

export const getAuthUser = (state) => state.auth.user;
export const getUserAddress = (state) => state.auth.address;

export default authSlice.reducer;
