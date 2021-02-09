import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/user/home">Home</Link>
      <Link to="/user/login">user login</Link>
      <Link to="/user/signup">user signup</Link>
      <Link to="/healthcare/login">healthcare login</Link>
      <Link to="/healthcare/signup">healthcare signup</Link>
      <Link to="/healthcare/home">healthcare home</Link>
    </div>
  );
}
