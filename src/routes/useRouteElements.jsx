import { useRoutes } from "react-router-dom";
import { PATH } from "../paths";
import { Suspense, lazy } from "react";
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

const TicketGeneralSect = lazy(() => import("../pages/ticket/TicketGeneral"))
const TicketUI = lazy(() => import("../pages/ticket/TicketUI"))
const TicketFormSect = lazy(() => import("../pages/ticket/TicketForm"))
const TicketResultSect = lazy(() => import("../pages/ticket/TicketResult"))

// const LoginPage = lazy(() => import("../pages/auth/Login"));
// const RegisterPage = lazy(() => import("../pages/auth/Register"));

//...

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
                        <Suspense fallBack={<div>Loading</div>}>
                            <HomePage />
                        </Suspense>
                    ),
                },
                {
                    path: PATH.ABOUT,
                    element: (
                        <Suspense fallBack={<div>Loading</div>}>
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
                        <Suspense fallback={<div>Loading</div>}>
                            <TicketUI />
                        </Suspense>
                    )
                },
                {
                    
                    path: "general",
                    element: (
                        <Suspense fallback={<div>Loading</div>}>
                            <TicketGeneralSect />
                        </Suspense>
                    )
                },
                {
                    path: "form",
                    element: (
                        <Suspense fallback={<div>Loading</div>}>
                            <TicketFormSect />
                        </Suspense>
                    )
                },
                {
                    path: "confirm",
                    element: (
                        <Suspense fallback={<div>Loading</div>}>
                            <div>Ticket Confirm</div>
                        </Suspense>
                    )
                },
                {
                    path: "done",
                    element: (
                        <Suspense fallback={<div>Loading</div>}>
                            <TicketResultSect />
                        </Suspense>
                    ),
                }
            ],
        },
        {
            path: "*",
            element: (
                <Suspense callBack={<div>Loading</div>}>
                    <NotFoundPage />
                </Suspense>
            ),
        },
    ]);

    return elements;
};

export default useRouteElements;
