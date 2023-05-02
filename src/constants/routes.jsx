import { lazy } from "react";
// import ChecklistDashboard from "pages/ChecklistDashboard";

const SignIn = lazy(() => import("pages/sign-in"));
const SignUp = lazy(() => import("pages/sign-up"));
const Landing = lazy(() => import("pages/landing"));
const Categories = lazy(() => import("pages/Categories"));
const CreateList = lazy(() => import("pages/CreateList"));
const FreeTemplate = lazy(() => import("pages/FreeTemplate"));
const Explore = lazy(() => import("pages/Explore"));
const ViewList = lazy(() => import("pages/ViewList"));
const ChecklistDashboard = lazy(() => import("pages/ChecklistDashboard"));
const Guest = lazy(() => import("pages/Guest"));
const CategoryByName = lazy(() => import("pages/CategoryByName"));

export const LandingRoute = {
  component: Landing,
  path: "/",
  exact: true,
  restricted: false,
};

export const SignInRoute = {
  component: SignIn,
  path: "/sign-in",
  exact: true,
  restricted: false,
};

export const SignUpRoute = {
  component: SignUp,
  path: "/sign-up",
  exact: true,
  restricted: false,
};

export const SearchRoute = {
  component: ChecklistDashboard,
  path: "/search",
  exact: true,
  restricted: false,
};

export const SearchByIdRoute = {
  component: ChecklistDashboard,
  path: "/search/:id",
  exact: true,
  restricted: false,
};

export const CreateListRoute = {
  component: CreateList,
  path: "/createChecklist",
  exact: true,
  restricted: false,
};

export const CreateListRouteById = {
  component: CreateList,
  path: "/createChecklist/:id",
  exact: true,
  restricted: false,
};

export const FreeTemplateRoute = {
  component: FreeTemplate,
  path: "/freeTemplate",
  exact: true,
  restricted: false,
};

export const ExploreRoute = {
  component: Explore,
  path: "/explore",
  exact: true,
  restricted: false,
};

export const CategoryByNameRoute = {
  component: CategoryByName,
  path: "/explore/:id",
  exact: true,
  restricted: false,
};

export const ViewListRoute = {
  component: ViewList,
  path: "/checklists",
  exact: true,
  restricted: false,
};

export const ViewListRouteById = {
  component: ViewList,
  path: "/checklists/:id",
  exact: true,
  restricted: false,
};

export const TempRoute = {
  component: ChecklistDashboard,
  path: "/temp",
  exact: true,
  restricted: true,
};

export const TempRouteeee = {
  component: ChecklistDashboard,
  path: "/create-list",
  exact: true,
  restricted: true,
};

export const TempRouteById = {
  component: ChecklistDashboard,
  path: "/temp/:id",
  exact: true,
  restricted: true,
};

export const ProcessRoute = {
  component: ChecklistDashboard,
  path: "/process",
  exact: true,
  restricted: true,
};

export const CategoriesRoutes = {
  component: Categories,
  path: "/categories/:id",
  exact: true,
  restricted: false,
};

export const InsightRoutes = {
  component: ChecklistDashboard,
  path: "/insight/:id",
  exact: true,
  restricted: true,
};

export const GuestRoutes = {
  component: Guest,
  path: "/guest/:id",
  exact: true,
  restricted: false,
};

const ROUTES = [
  SignInRoute,
  LandingRoute,
  SignUpRoute,
  SearchRoute,
  SearchByIdRoute,
  CreateListRoute,
  FreeTemplateRoute,
  ExploreRoute,
  ViewListRoute,
  ProcessRoute,
  CreateListRouteById,
  ViewListRouteById,
  TempRoute,
  TempRouteById,
  CategoriesRoutes,
  InsightRoutes,
  GuestRoutes,
  CategoryByNameRoute,
  TempRouteeee,
];

export default ROUTES;
