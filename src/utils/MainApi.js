import { BASE_URL } from "./constants";

export function isApiError(error){
  if (error === undefined || error === null) return false;
  return (
    typeof error.status === 'number' &&
    typeof error.payload === 'object'
  );
}

const getResponseData = async (response) => {
    if (!response.ok) {
      return Promise.reject({
        status: response.status,
        payload: await response.json(),
      });
    }
    return await response.json();
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