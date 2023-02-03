import axios from "axios"

let instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"c8dc03d9-93bc-4e54-8890-c68d179b4c33"
      }
})

let instance2 = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/profile/",
    headers:{
        "API-KEY":"c8dc03d9-93bc-4e54-8890-c68d179b4c33"
      }
})

export const UsersDAL = {
    getUsers  (currentPage,pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,{
        })
    },
    
    getUsersD(id) {
        return instance.delete(`follow/${id}`)
    },
    
    getUsersP (id){
        return instance.post(`follow/${id}`)
    },

    getUserProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    savePhoto(file){
        let formData = new FormData()
        formData.append("image",file)
        return instance.post('profile/photo',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    }
}

export let profileDAL = {
    getStatus(userId){
        return instance2.get(`status/`+userId)
    },
    updateStatus(status){
        return instance2.put('status',{status:status})
    }
}

export const authDAL = {
    auth(){
        return instance.get(`auth/me`)
    },  
    loginn(email,password,rememberMe=false){
        return instance.post('auth/login',{email,password,rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    } 
}