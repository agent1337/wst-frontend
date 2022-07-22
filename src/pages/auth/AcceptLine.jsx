import React from "react";

export default function AcceptLine() {
  let params = new URLSearchParams(document.location.search);
  let token = params.get("token");
  let redirect = params.get("route");
  localStorage.setItem("accessToken", token);
  document.location.href = `/${redirect}`;

  return <div>Redirect</div>;
}
