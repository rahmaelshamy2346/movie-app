import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <h1>Home</h1>
      </Layout>
    ),
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;