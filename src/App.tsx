import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container } from "@mui/material";
import Content from "./components/Content";
import Toolbar from "./components/Toolbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Container sx={{ mt: 12 }} maxWidth="md">
        <Content />
        test2
      </Container>
    </div>
  );
}

export default App;
