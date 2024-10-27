import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import TransitionWrapper from "./components/TransitionWrapper";
import { ToastContainer } from "react-toastify";
const toastStyles = {
  zIndex: 9999,
};
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const OnChange = lazy(() => import("./pages/OnChange/OnChange"));
const MountingData = lazy(() => import("./pages/MountingData/MountingData"));
const FormInput = lazy(() => import("./pages/FormInput/FormInput"));

function App() {
  const navigate = useNavigate();
  return (
    <>
      <ToastContainer
        pauseOnFocusLoss={false}
        limit={5}
        newestOnTop
        style={toastStyles}
      />
      <TransitionWrapper>
        <Suspense fallback={<p>Loading....</p>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/on-change" element={<OnChange />} />
            <Route path="/mounting-data" element={<MountingData />} />
            <Route path="/form-input" element={<FormInput />} />
            <Route
              index
              path="/"
              element={<Navigate to="/dashboard" replace />}
            />
            <Route
              path="*"
              element={
                <p>
                  Not Found,{" "}
                  <span
                    className="underline text-blue-500 hover:text-blue-600 hover:cursor-pointer"
                    onClick={() => navigate("/")}>
                    Click here to back to Dashboard
                  </span>
                </p>
              }
            />
          </Routes>
        </Suspense>
      </TransitionWrapper>
    </>
  );
}

export default App;
