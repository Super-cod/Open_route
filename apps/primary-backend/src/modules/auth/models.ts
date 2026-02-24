import {t} from "elysia";

export namespace AuthModel{
    export const signinSchema = t.Object({
        email: t.String(),
        password: t.String()
    })

    export type signinSchema = typeof signinSchema.static;

    export const signinResponceSchema = t.Object({
        message: t.Literal("Signed in Sucessfully"),
        userId: t.String(),

    })
    export type signinResponceSchema = typeof signinResponceSchema.static;

    export const signinErrorResponceSchema = t.Object({
        message: t.Literal("invalid credentials")
    })
    
    export type signinErrorResponceSchema = typeof signinErrorResponceSchema.static;


    //sign-up

    export const signupSchema = t.Object({
        email: t.String(),
        password: t.String()
    })

    export type signupSchema = typeof signupSchema.static;

    export const signupResponceSchema = t.Object({
        message : t.Literal("successfully signed up"),
        id: t.String(),
    })
    export type signupResponceSchema = typeof signupResponceSchema.static;

    export const signupErrorResponceSchema = t.Object({
        message: t.Literal("error while signing up")
    })

    export type signupErrorResponceSchema = typeof signupErrorResponceSchema.static;
    

}