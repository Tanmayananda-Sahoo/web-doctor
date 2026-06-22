import { Routes, Route } from "react-router-dom";
import InputPage from "../pages/InputPage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import { webStore } from "./web.services.js";

const AppRoutes = () => {
    const analytics = webStore((state) => state.analytics);

    return (
        <Routes>
            <Route path="/" element={<InputPage />} />
            <Route
                path="/analytics"
                element={analytics ? <DashboardPage /> : <InputPage />}
            />
        </Routes>
    );
}

export default AppRoutes;