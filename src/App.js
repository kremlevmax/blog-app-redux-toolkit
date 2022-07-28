import "./style.css";
import PostsList from "./feautres/PostsList";
import AddPostForm from "./feautres/AddPostForm";
import LoginPopup from "./components/LoginPopup";
import { useAuth } from "./service/userServices";
import { useSelector } from "react-redux";

function App() {
  useAuth();

  const loginStatus = useSelector((state) => state.users.loginStatus);

  return (
    <div className='App'>
      {loginStatus ? (
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
