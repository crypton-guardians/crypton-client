import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as P from 'pages';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<P.LandingPage />} />
        <Route path="/login" element={<P.LoginPage />} />
        <Route path="/signup" element={<P.SignupPage />} />
        <Route path="/dashboard" element={<P.DashboardPage />} />
        <Route path="*" element={<P.NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
