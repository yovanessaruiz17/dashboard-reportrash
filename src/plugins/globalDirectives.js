import clickOutside from "../directives/click-ouside.js";

/**
 * You can register  your main Vue instance
 */

const GlobalDirectives = {
  install(Vue) {
    Vue.directive("click-outside", clickOutside);
  },
};

export default GlobalDirectives;
