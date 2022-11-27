import store from "../index";
import router from "../../router/index";
import jwt from "@/utils/jwt";

import { post_request } from "@/utils/request";

export default {
    async signIn(ctx, payload){
        ctx.commit("turnOffError");
        ctx.commit("toggleLoading");
        const query = await fetch(`https://server.sciborowka.pl/sciborowka-auth/sign-up?login=${payload.login}&password=${payload.password}`,{method: "POST"});
        if(!query.ok){
            ctx.commit("setError");
            ctx.commit("toggleLoading");
            return false;
        }
        const result = await query.json();
        ctx.commit("toggleLoading");
        ctx.commit("setAuthData", {auth: result.data.authToken, refresh: result.data.refreshToken});
        router.go("/control-panel");
        return true;
    },
    async autoLogIn(ctx){
        if(ctx.getters.isLogged) return;
        if(await store.dispatch("auth/validateTokens")) return;
        const {authToken, refreshToken} = ctx.getters.getAuthData;
        if(!authToken && !refreshToken) return;
        try{
            const query = await fetch(`https://server.sciborowka.pl/sciborowka-auth/refresh-tokens?auth=${authToken}&refresh=${refreshToken}`); 
            const result = await query.json();
            if(result.statusCode!=="OK") {
                ctx.commit("removeAuthDataAndLogOut")
                return;
            }
            ctx.commit("setAuthData", {auth: result.data.authToken, refresh: result.data.refreshToken});
            router.go("/control-panel");
        }catch(err){
            console.log(err);
        }
    },
    async validateTokens(ctx){
        const tokens = ctx.getters.getAuthData;
        try{
            if(!tokens.authToken && !tokens.refreshToken) return false;
            const query = await fetch(`https://server.sciborowka.pl/sciborowka-auth/validate-tokens`, {method: "POST", headers: {
                "auth": tokens.authToken,
                "refresh": tokens.refreshToken
            }});
            
            if(query.ok){
                const payload = jwt(tokens.authToken);
                const timeLeft = Math.abs(new Date(payload.exp*1000)-new Date());
                setTimeout(store.dispatch("auth/autoLogIn"), timeLeft-10000);
                ctx.commit("setAuthData", {auth: tokens.authToken, refresh: tokens.refreshToken});
                return true;
            }
        }catch(error){
            return false;
        }
    },
    async logout(ctx){
        const response = await post_request("https://server.sciborowka.pl/sciborowka-auth/sign-out",null,false);
        if(response.statusCode === "ACCEPTED"){
            ctx.commit("removeAuthDataAndLogOut");
        }
    }
}