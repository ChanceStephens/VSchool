import './App.css';
import Header from "./Components/Header";
import BlogList from "./Components/BlogList";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="mainApp">
      <Header />
      <BlogList />
      <h4>OLDER POSTS →</h4>
      <Footer />
    </div>
  );
}

export default App;