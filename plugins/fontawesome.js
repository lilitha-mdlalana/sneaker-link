import { defineNuxtPlugin } from "#app";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCartShopping,faHeart,faUser } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(faCartShopping,faHeart,faUser);

export default defineNuxtPlugin((nuxtApp) => nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon));
