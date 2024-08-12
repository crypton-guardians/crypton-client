import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from 'components/dashboard/layout/DashboardLayout';
import * as P from 'pages';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout이 필요 없는 페이지 */}
        <Route path="/login" element={<P.LoginPage />} />
        <Route path="/signup" element={<P.SignupPage />} />
        <Route path="/" element={<P.LandingPage />} />
        <Route path="*" element={<P.NotFoundPage />} />

        {/* Layout이 필요한 페이지 */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<P.DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
