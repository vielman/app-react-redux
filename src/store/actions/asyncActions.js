//ASYCN Actions Types:
export const API_CALL_REQUEST = 'API_CALL_REQUEST'
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'
export const API_CALL_FAILURE = 'API_CALL_FAILURE'

export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request:{
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                }
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }

    }
}

/**
 * Generic HttpRequest Accion dispatcher
 * @param {*} method 
 * @param {*} url 
 * @param {*} data 
 * @returns 
 */
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request:{
                method: method,
                url: url,
                data: data  
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }

    }
}