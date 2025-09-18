import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import DashboardPage from "../pages/DashboardPage.jsx"
import ShortUrls from '../pages/ShortUrls.jsx';
import AllUrls from '../pages/AllUrl.jsx'
import Profile from "../pages/Profile.jsx";
import { checkAuth } from "../utils/helper"
import HomePage from "../pages/HomePage.jsx";

export const dasboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashboardPage,
    beforeLoad: checkAuth
})


// /dashboard/shorturl
export const dashboardHome = createRoute({
  getParentRoute: () => dasboardRoute,
  path: '/',
  component: HomePage,
});

// /dashboard/shorturl
export const dashboardShortUrlsRoute = createRoute({
  getParentRoute: () => dasboardRoute,
  path: '/shorturls',
  component: ShortUrls,
});

// /dashboard/allurl
export const dashboardUrlsRoute = createRoute({
  getParentRoute: () => dasboardRoute,
  path: '/allurls',
  component: AllUrls,
});
// /dashboard/allurl
export const userProfile = createRoute({
  getParentRoute: () => dasboardRoute,
  path: '/profile',
  component: Profile,
});

// /dashboard/settings
// export const dashboardSettingsRoute = createRoute({
//   getParentRoute: () => dasboardRoute,
//   path: '/logout',
//   component: Logout,
// });

// ✅ Create route tree with children
export const dasboardRouteTree = dasboardRoute.addChildren([
  dashboardUrlsRoute,
  dashboardShortUrlsRoute,
  userProfile,
  dashboardHome,
]);