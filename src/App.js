import "./style.css";
import PostsList from "./feautres/PostsList";
import AddPostForm from "./feautres/AddPostForm";

function App() {
  return (
    <div className='App'>
      <PostsList />
      <AddPostForm />
    </div>
  );
}

export default App;
