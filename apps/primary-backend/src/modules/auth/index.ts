import {Elysia} from 'elysia';
import {AuthModel} from './models';
import {AuthService} from './service';
import { jwt } from '@elysiajs/jwt';


export const app = new Elysia({prefix:'/auth'})
    .use(
        jwt({
            name: 'jwt',
            secret: process.env.JWT_SECRET!
        })
    )

    .post("sign-up", async ({body, status})=> {
        try{
            const userId = await AuthService.signup(body.email, body.password);
            return {
                message: "successfully signed up",
                id: userId};
        } catch(e) {
            console.error(e);
            return status(400, {
                message: "error while signing up"
            });
        }
    },{
        body: AuthModel.signupSchema,
        response: {
            200: AuthModel.signupResponceSchema,
            400: AuthModel.signupErrorResponceSchema,
        }
    })
    .post("sign-in", async ({jwt ,body, status , cookie: {auth}})=> {
        const {isValid, userId} = await AuthService.signin(body.email, body.password);
        console.log("sign-in response:",isValid, "User_id",userId);
        if(isValid && userId){
            const tocken = await jwt.sign({userId});
            auth.set({
                value: tocken,
                httpOnly: true,
                maxAge: 7 * 86400,
            })
            return {
                message: "Signed in Sucessfully",
                userId: userId
            }
        }
        else{
            return status(403, {
                message: "invalid credentials"
            });
        }
    },{
        body: AuthModel.signinSchema,
        response: {
            200: AuthModel.signinResponceSchema,
            403: AuthModel.signinErrorResponceSchema,
        }
    })


