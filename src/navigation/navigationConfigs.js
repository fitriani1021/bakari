import React from "react";

import {
    PageNotFound,
    Dashboard
} from "../pages";
import constants from "../constants/constants";
import {
    createBrowserRouter,
} from "react-router-dom";
import authRoutes from "./routes/authRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";
import menuRoute from "./routes/menuRoute";
import tableRoute from "./routes/tableRoute";
import transactionRoute from "./routes/transactionRoute";

const {ROUTES} = constants;

const navigationConfigs = createBrowserRouter([
    { path: "*", element: <PageNotFound /> },
    {
        path: ROUTES.DASHBOARD,
        element: <ProtectedRoutes />,
        children: [{ index: true, element: <Dashboard /> }, menuRoute, tableRoute, transactionRoute]
    },
    authRoutes,
])

export default navigationConfigs;
