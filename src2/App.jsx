import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AdminUser = lazy(() => import('./components/AdminUser'));

const App = () => {
  return (
    <Router>
      <div>
        {/* Other routes */}
        <Routes>
          <Route
            path="admin-user/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AdminUser />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
