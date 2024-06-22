import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './feautres/menu/Menu';
import Cart from './feautres/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './feautres/order/CreateOrder';
import Order, { loader as orderLoader } from './feautres/order/Order';
import { action as updateOrderAction } from './feautres/order/UpdateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
