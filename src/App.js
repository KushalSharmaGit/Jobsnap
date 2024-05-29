import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage';
import AddJobsPage from './Pages/AddJobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage, { jobLoader } from './Pages/JobPage';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/jobs' element={<JobsPage />}></Route>
        <Route path='add-jobs' element={<AddJobsPage />}></Route>
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  );
};

export default App;
