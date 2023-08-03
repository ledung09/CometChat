import {
  Routes, 
  Route,
  NavLink,
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Faq from "./pages/help/Faq"
import Contact, { contactAction } from "./pages/help/Contact"
import Careers, { carrersLoader } from "./pages/careers/Careers"
import NotFoud from "./pages/NotFoud";

import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout"
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails"
import CareersError from "./pages/careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction}/>
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route 
          index 
          element={<Careers />} 
          loader={carrersLoader}
        />
        <Route 
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFoud />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router = { router } />
  );
}

export default App
