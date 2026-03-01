import { Elysia } from "elysia";
import { app as authApp }  from "./modules/auth/index";
import { app as apiKeysApp } from "./modules/apikeys/index";
import { app as modelsApp } from "./modules/models/index";
import { app as paymentsApp } from "./modules/paymets/index";
export const app = new Elysia().use(authApp).use(apiKeysApp).use(modelsApp).use(paymentsApp).listen(3000);

export type App = typeof app;

