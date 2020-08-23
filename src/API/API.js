import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API-KEY": "a4ba89cd-2d03-49f7-8ec7-417c749906a7"}
})

   



export const getUsersAPI = (currentPage, usersInPage) => {
  return instance.get(`users?page=
  ${currentPage}&count=${usersInPage}`)
  .then(response => response.data)
}



export const follow = (userId) => {
 return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, 
 {}, {withCredentials : true, 
 headers: {"API-KEY": "a4ba89cd-2d03-49f7-8ec7-417c749906a7"}})
}

export const unfollow = (userId) => {
  return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, 
  {withCredentials : true, 
  headers: {"API-KEY": "a4ba89cd-2d03-49f7-8ec7-417c749906a7"}})
}

export const getProfileAPI = (userId) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId,
                  {withCredentials: true})
}

export const authMe = () => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, 
  {withCredentials : true})
}

export const getStatusAPI = (userId) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/` + userId, 
  {withCredentials : true})
}

export const updateStatusAPI = (status) => {
  return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`,  
  {status : status}, 
  {withCredentials : true, 
 headers: {"API-KEY": "a4ba89cd-2d03-49f7-8ec7-417c749906a7"}}) 
}

export const login = (email, password, rememberMe) => {
   return axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, 
 {email, password, rememberMe}, {withCredentials : true, 
 headers: {"API-KEY": "a4ba89cd-2d03-49f7-8ec7-417c749906a7"}})
}

export const logout = () => {
  return axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`, 
  {withCredentials : true, 
  headers: {"API-KEY": "a4ba89cd-2d03-49f7-8ec7-417c749906a7"}})
}