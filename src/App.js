import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Suspense, lazy } from 'react';
import ScrollToTop from './helpers/scroll-top';


const HomeMedicalEquipment = lazy(() =>
  import("./pages/home/HomeMedicalEquipment")
);

const Contact = lazy(() =>
  import("./pages/other/Contact")
);
const App = () => {

  
  return (
      <Router>
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="flone-preloader-wrapper">
                <div className="flone-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path={ "/"}
                element={<HomeMedicalEquipment/>}
              />
                 <Route
                path={ "/contact"}
                element={<Contact/>}
              />

            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
  );
};

export default App;

