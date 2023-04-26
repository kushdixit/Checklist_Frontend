import SignIn from "pages/sign-in";
import SignUp from "pages/sign-up";
import Landing from "pages/landing";
import Categories from "pages/Categories";
import CreateList from "pages/CreateList";
import FreeTemplate from "pages/FreeTemplate";
import Explore from "pages/Explore";
import ViewList from "pages/ViewList";
import ChecklistDashboard from "pages/ChecklistDashboard";
import Guest from "pages/Guest";
import CategoryByName from "pages/CategoryByName";

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
