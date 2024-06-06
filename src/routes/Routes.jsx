import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import GuestRoute from "./visibility/GuestRoute";
import PrivateRoute from "./visibility/PrivateRoute";
import ContactUs from "../pages/ContactUs";
import Preload from "../pages/Preload";
import LandingPage from "../pages/LandingPage";
import InformasiPage from "../pages/InformasiPage";
import ProfileBPMDSI from "../pages/ProfileBPMDSI";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../components/layouts/AuthLayout";
import Merch from "../pages/Merch";
import DetailMerch from "../pages/DetailMerch";
import Komisi from "../pages/Komisi";
import TentangKami from "../pages/TentangKami";
import DetailInformasi from "../pages/DetailInformasi";
import ProfileEmdsi from "../pages/ProfileEmdsi";
import Departemen from "../pages/Departemen";
import PengembanganInternal from "../pages/PengembanganInternal";

const createRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <PageLayout>
                <LandingPage />
            </PageLayout>
        ),
    },
    {
        path: "/informasi",
        element: (
            <PageLayout>
                <InformasiPage />
            </PageLayout>
        ),
    },
    // {
    //   path: "/contactUs",
    //   element: <PageLayout><ContactUs/></PageLayout>,
      
    // },
    {
      path: '/',
      element: <PrivateRoute />,
      children: [ 
      ],
    },
    
    {
      path:'/',
      element: <GuestRoute />,
      children: [
     
      ],
    },
    {
      path: "/preload",
      element: <Preload/>,
    },
 
    {
        path: "/login",
        element: (
            <AuthLayout type="login">
                <Login />
            </AuthLayout>
        ),
    },
    {
        path: "/register",
        element: (
            <AuthLayout type="register">
                <Register />
            </AuthLayout>
        ),
    },
    {
        path: "/merch",
        element: (
            <PageLayout>
                <Merch />
            </PageLayout>
        ),
    },
    {
        path: "/merch/:id",
        element: (
            <PageLayout>
                <DetailMerch />
            </PageLayout>
        ),
    },
    {
        path: "/tentang-kami",
        element: (
            <PageLayout>
                <TentangKami />
            </PageLayout>
        ),
    },
    {
        path: "/informasi/:id",
        element: (
            <PageLayout>
                <DetailInformasi />
            </PageLayout>
        ),
    },
    {
        path: "/emdsi",
        element: (
            <PageLayout>
                <ProfileEmdsi />
            </PageLayout>
        ),
    },
    {
        path: "/bpmdsi",
        element: (
            <PageLayout>
            <ProfileBPMDSI />
        </PageLayout>
        ),
    },
    {
        path: "/departemen/:id",
        element: (
            <PageLayout>
                <Departemen />
            </PageLayout>
        ),
    },
    {
        path: "/komisi/:id",
        element: (
            <PageLayout>
                <Komisi />
            </PageLayout>
        ),
    },
    {
        path: "/pengembanganinternal",
        element: (
            <PageLayout>
                <PengembanganInternal />
            </PageLayout>
        ),
    },
    {
        path: "/informasi",
        element: (
            <PageLayout>
                <div>Informasi</div>
            </PageLayout>
        ),
    },
    {
        path: "/",
        element: <PrivateRoute />,
        children: [],
    },

    {
        path: "/",
        element: <GuestRoute />,
        children: [],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

const Routes = () => {
    return <RouterProvider router={createRouter} />;
};

export default Routes;
