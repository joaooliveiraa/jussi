import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";

import SearchPageProvider from "./context/SearchPage";

function App() {
  return (
    <>
      <SearchPageProvider>
        <Header />
        <Banner />
        <Content />
        <Footer />
      </SearchPageProvider>
    </>
  );
}

export default App;
