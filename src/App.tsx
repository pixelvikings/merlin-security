import { GlobalStyle } from "./common/globalStyles";
import { theme } from "./common/theme";
import { ThemeProvider } from "styled-components";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
