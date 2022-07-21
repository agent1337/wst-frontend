import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import ResumeLayout from "../layouts/ResumeLayout";
import AcceptLine from "../pages/auth/AcceptLine";
import ForgotPassword from "../pages/auth/ForgotPassword";
import PageNotFound from "../pages/auth/PageNotFound";
import CreateResume from "../pages/createResume/CreateResume";
import EditResume from "../pages/editResume/EditResume";
import Resumes from "../pages/resumes/Resumes";
import ViewResume from "../pages/viewResume/ViewResume";
import { routes } from "./Routes";

export const routesData = [
  // auth
  {
    path: routes().signup,
    Component: Signup,
    Layout: AuthLayout,
    exact: true,
  },
  {
    path: routes().signin,
    Component: Signin,
    Layout: AuthLayout,
  },
  {
    path: routes().acceptLine,
    Component: AcceptLine,
    Layout: AuthLayout,
  },
  {
    path: routes().forgotPassword,
    Component: ForgotPassword,
    Layout: AuthLayout,
  },

  // resume by id

  {
    path: routes().resumeById,
    Component: ViewResume,
    Layout: ResumeLayout,
  },
  {
    path: routes().otherResumeById,
    Component: ViewResume,
    Layout: ResumeLayout,
  },

  // working with resume
  {
    path: routes().resumes,
    Component: Resumes,
    Layout: MainLayout,
    exact: true,
  },
  {
    path: routes().createResume,
    Component: CreateResume,
    Layout: MainLayout,
  },
  {
    path: routes().editResumeById,
    Component: EditResume,
    Layout: MainLayout,
  },

  {
    path: routes().pageNotFound,
    Component: PageNotFound,
    Layout: ResumeLayout,
  },
];
