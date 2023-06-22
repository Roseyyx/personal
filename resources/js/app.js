import './bootstrap';
import {createApp} from "vue/dist/vue.esm-bundler.js";

const app = createApp({});

import NavbarComponent from "@/components/NavbarComponent.vue";
app.component('navbar-component', NavbarComponent);

app.mount('#app');
