import { BASE_URL } from "./constants";

const getResponseData = (res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  };
  


export const register =(name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password, email }),
      }).then(getResponseData);
    };



export const login =( email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }).then(getResponseData);
}

export const getCurrentUser = () =>{
        return fetch(`${BASE_URL}/users/me`, {
            method: "GET",
            credentials: "include",
            headers: {
               "Content-Type": "application/json",
            },
        })
        .then(getResponseData);
    }


export const signout = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, 
    })
    .then(getResponseData);

}

export const saveMovie = (movie) => {
    
    return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(movie),
    })
    .then(getResponseData);  
}