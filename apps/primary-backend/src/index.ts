import { Elysia } from "elysia";
import { app as authApp }  from "./modules/auth/index";
import { app as apiKeysApp } from "./modules/apikeys/index";
import { app as modelsApp } from "./modules/models/index";
import { app as paymentsApp } from "./modules/paymets/index";
const app = new Elysia().use(authApp).use(apiKeysApp).use(modelsApp).use(paymentsApp).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);


/*
 auth => signups, signin
 api-key => create api-key, get api-key, delete api-key , desable api-key
 models => get all the supported models , their pricing, providers etc.
 payment =:>  



*/