import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import WrongPage from "./pages/WrongPage";
import BirdOfTheDayPage from "./pages/BirdOfTheDayPage";
import QuizPage from "./pages/QuizPage";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/birdoftheday", Component: BirdOfTheDayPage },
      { path: "/quiz", Component: QuizPage },
      { path: "*", Component: WrongPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
