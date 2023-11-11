import Header from "./components/Header";
import NewsList from "./components/NewsList";
import { SearchProvider } from "./services/contexts/searchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Header />
        <NewsList />
      </SearchProvider>
    </>
  );
}

export default App;
