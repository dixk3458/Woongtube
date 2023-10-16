import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import VideoHome from './pages/VideoHome';
import VideoList from './pages/VideoList';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <VideoHome />,
      },
      {
        path: '/channel/:category',
        element: <VideoHome />,
      },
      { path: '/video/:keyword', element: <VideoList /> },
      { path: '/video/:keyword/:videoId', element: <VideoDetail /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
