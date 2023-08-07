import Home from "./pages/Home";
import Video from "./pages/Video";
import Photo from "./pages/Photo";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/video", component: Video },
  { path: "/Photo", component: Photo },
];

export { publicRoutes };
