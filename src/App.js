import "./style.css";
import { useEffect } from "react";
import PostsList from "./feautres/PostsList";
import AddPostForm from "./feautres/AddPostForm";
import LoginPopup from "./components/LoginPopup";
import { useAuth } from "./service/userServices";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./feautres/post/postSlice";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();

  useAuth();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const loginStatus = useSelector((state) => state.users.loginStatus);
  const loading = useSelector((state) => state.users.loading);

  return (
    <div className='App'>
      {loading ? (
        <Loading />
      ) : loginStatus ? (
        <>
          <PostsList />
          <AddPostForm />
        </>
      ) : (
        <LoginPopup />
      )}
    </div>
  );
}

export default App;
