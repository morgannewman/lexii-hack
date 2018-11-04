import SimpleReactRouter from "simple-react-router";
import Landing from "./landing/Landing";
import Search from "./search/Search";

export default class Router extends SimpleReactRouter {
  routes(map) {
    map("/", Landing);
    map("/search", Search);
    map("/:path*", Landing); // catchall route
  }
}
