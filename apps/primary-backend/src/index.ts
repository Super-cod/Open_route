import { Elysia } from "elysia";
import { app as authApp }  from "./modules/auth/index";

const app = new Elysia().use(authApp).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);


/*
 auth => signups, signin
 api-key => create api-key, get api-key, delete api-key , desable api-key
 models => get all the supported models , their pricing, providers etc.
 payment =:>  



*/