import { defineNuxtPlugin } from "#app";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHeart,faCartShopping,faUser,faAngleDown,faAngleUp } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(faCartShopping,faHeart,faUser,faAngleDown,faAngleUp);

export default defineNuxtPlugin((nuxtApp) => nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon));
