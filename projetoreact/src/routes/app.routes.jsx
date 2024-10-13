import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Createmovie } from "../pages/Createmovie";
import { MoviePreview } from "../pages/MoviePreview";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<Createmovie />} />
      <Route path="/preview" element={<MoviePreview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
