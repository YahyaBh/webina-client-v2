import Home from "./Home/Home";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <Home />
      </main>
    </ThemeProvider>
  );
}
