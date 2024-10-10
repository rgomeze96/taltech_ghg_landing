import Navbar from "./hoc/Navbar";
import Wrapper from "./hoc/Wrapper";
import { LazyRouter } from "./routes/LazyRouter";

function App() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <LazyRouter />
      </Wrapper>
    </>
  );
}

export default App;
