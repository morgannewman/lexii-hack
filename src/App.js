import SimpleReactRouter from "simple-react-router";
// import Landing from "./landing/Landing";
import Search from "./search/Search";

export default class Router extends SimpleReactRouter {
  routes(map) {
    map("/", Search);
    map("/search", Search);
    map("/:path*", Search); // catchall route
  }
}
