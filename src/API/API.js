import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API_KEY": "a4ba89cd-2d03-49f7-8ec7-417c749906a7"}
})

   


/*
export const getUsersAPI = (currentPage, usersInPage) => {
  return instance.get(`users?page=
  ${currentPage = 1}&count=${usersInPage = 8}`)
  .then(response => response.data)
}*/


export const getUsersAPI = (currentPage, usersInPage) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
  ${currentPage}&count=${usersInPage}`, 
  {withCredentials: true})
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
  return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
}

export const authMe = () => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, 
  {withCredentials : true})
}