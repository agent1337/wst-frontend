export const routes = (params) => ({
  // AUTH
  signup: "/",
  signin: "/signin",
  acceptLine: "/acceptline",
  forgotPassword: "/forgot-password",

  // VIEW Resume
  resumeById: `/resumes/${params?.id || ":id"}`,
  otherResumeById: `/resumes/others/${params?.id || ":id"}`,

  // WORK WITH RESUME
  resumes: "/resumes",
  createResume: "/resume/create",
  editResumeById: `/resume/edit/${params?.id || ":id"}`,

  pageNotFound: "*",
});
