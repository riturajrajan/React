import "./App.css";
import Head from "./components/Head";
import WatchPage from "./components/WatchPage";
import Body from "./components/Body"
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <Outlet />
    </div>
    </Provider>
  );
};

export const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Body />,
          children: [
            {
              path: '/',
              element: <MainContainer />
            },
            {
              path: '/watch',
              element: <WatchPage />
            }
          ]
        }
      ]
    }
  ]
)

export default App;
