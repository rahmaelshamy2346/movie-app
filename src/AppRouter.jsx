import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <div className="home-preview">
          <h1>Welcome to Movie App</h1>
          <p>Discover movies, TV shows, and more.</p>
        </div>
      </Layout>
    ),
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;