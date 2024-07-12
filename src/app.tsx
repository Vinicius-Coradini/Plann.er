import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreatTripPage } from './pages/create-trip'
import { TripdetailsPage } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreatTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripdetailsPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />
}
