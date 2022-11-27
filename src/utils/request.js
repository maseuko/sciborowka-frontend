import store from "@/store/index";

const getAuthHeaders = () => {
    return {
        'auth': store.getters["auth/authToken"],
        'refresh': store.getters["auth/refreshToken"]
    }
}

export const post_request = async (url, data, isJson)=>{
    const authHeaders = getAuthHeaders();
    try{
        const headers = {...authHeaders}
        if(isJson) headers['Content-Type'] = 'application/json';
        const query = await fetch(url, {
            method: "POST",
            body: data,
            headers
        });
        
        if(query.ok) return await query.json();
            
        return null;
    }catch(err){
        return null;
    }
}

export const get_request = async (url)=>{
    try{
        const query = await fetch(url);
        return await query.json();
    }catch(err){
        return null;
    }
}

export const delete_request = async(url) => {
    const authHeaders = getAuthHeaders();
    try{
        const query = await fetch(url, {
            method: 'DELETE',
            headers: authHeaders
        });
        if(query.ok) return await query.json();
        return null;
    }catch(err){
        return null;
    }
}

export default {
    post: post_request,
    get: get_request,
    delete: delete_request
}