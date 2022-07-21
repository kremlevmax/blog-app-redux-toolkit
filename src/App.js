import "./style.css";
import PostsList from "./feautres/PostsList";
import AddPostForm from "./feautres/AddPostForm";
import LoginPopup from "./components/LoginPopup";

function App() {
  return (
    <div className='App'>
      <PostsList />
      <AddPostForm />
      <LoginPopup />
    </div>
  );
}

export default App;
