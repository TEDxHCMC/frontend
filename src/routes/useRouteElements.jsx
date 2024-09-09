import { useRoutes } from "react-router-dom";
import { PATH } from "../paths";
import { Suspense, lazy } from "react";
import Spinner from "../components/Spinner";
import MainLayout from "../layouts/MainLayout";
import TicketLayout from "../layouts/TicketLayout";

/**
 * @description
 * Lazy loading for components
 */
const HomePage = lazy(() => import("../pages/home"));
const AboutPage = lazy(() => import("../pages/about"));
// const SpeakerPage = lazy(() => import("../pages/speaker"));
// const InteractivePage = lazy(() => import("../pages/interactive"));
// const ErrorPage = lazy(() => import("../pages/error"));
const NotFoundPage = lazy(() => import('../pages/not-found'))

const TicketUI = lazy(() => import("../pages/ticket/TicketUI"))
const TicketFormSect = lazy(() => import("../pages/ticket/TicketForm"))
const TicketResultSect = lazy(() => import("../pages/ticket/TicketResult"))

// const LoginPage = lazy(() => import("../pages/auth/Login"));
// const RegisterPage = lazy(() => import("../pages/auth/Register"));

//...
// const MainLayout = lazy(() => import("../layouts/MainLayout"))
// const TicketLayout = lazy(() => import("../layouts/TicketLayout"))

/**
 * @description
 * Define routes
 *
 * @returns
 * Routing elements
 */

const useRouteElements = () => {
    const elements = useRoutes([
        {
            path: PATH.HOME,
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    index: true,
                    element: (
                        <Suspense fallBack={<Spinner />}>
                            <HomePage />
                        </Suspense>
                    ),
                },
                {
                    path: PATH.ABOUT,
                    element: (
                        <Suspense fallBack={<Spinner />}>
                            <AboutPage />
                        </Suspense>
                    ),
                },
                // {
                //     path: PATH.SPEAKER,
                //     element: (
                //         <Suspense callBack={<div>Loading</div>}>
                //             <SpeakerPage />
                //         </Suspense>
                //     ),
                // },
                // {
                //     path: PATH.INTERACTIVE,
                //     element: (
                //         <Suspense callBack={<div>Loading</div>}>
                //             <InteractivePage />
                //         </Suspense>
                //     ),
                // },
            ]
        },
        {
            path: PATH.TICKET,
            element: <TicketLayout />,
            children: [
                {
                    index: true,
                    element: (
                        <Suspense fallback={<Spinner />}>
                            <TicketUI />
                        </Suspense>
                    )
                },
                {
                    path: "form",
                    element: (
                        <Suspense fallback={<Spinner />}>
                            <TicketFormSect />
                        </Suspense>
                    )
                },
                {
                    path: "done",
                    element: (
                        <Suspense fallback={<Spinner />}>
                            <TicketResultSect />
                        </Suspense>
                    ),
                }
            ],
        },
        {
            path: "*",
            element: (
                <Suspense callBack={<Spinner />}>
                    <NotFoundPage />
                </Suspense>
            ),
        },
    ]);

    return elements;
};

export default useRouteElements;
