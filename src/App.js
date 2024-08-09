import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Container>    

        <body>
          <h1>Etec MCM</h1>
          <p>Se o barato é louco e o processo é lento. No momento, deixa eu caminhar contra o vento</p>
        </body>

      </Container>
      <Footer/>
    </>

  );
}

export default App;
