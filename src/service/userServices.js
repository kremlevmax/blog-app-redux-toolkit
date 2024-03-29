import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoginStatus } from "../feautres/users/userSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setLoginStatus({
        loginStatus: false,
        email: "",
        loading: true,
      })
    );

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setLoginStatus({
            loginStatus: true,
            email: user.email,
            loading: false,
          })
        );
      } else {
        dispatch(
          setLoginStatus({ loginStatus: false, username: "", loading: false })
        );
      }
    });
    return unsubscribe;
  }, [dispatch]);
};

export const createAccount = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return "done";
  } catch (error) {
    console.log(error);
    return "exists";
  }
};

export const loginToAccount = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return "done";
  } catch (error) {
    console.log(error);
    return "wrong-password";
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const monitorAuthChange = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return true;
    } else {
      return false;
    }
  });
};
