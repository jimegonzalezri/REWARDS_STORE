// Constantes

const API_URL = "https://coding-challenge-api.aerolab.co";

//Funcion con fetch para llamar el user desde la API con sus puntos actuales

async function requestGetUser(setGetUser) {
    try {
        const response = await fetch(`${API_URL}/user/me`, {
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMzIwYmMxZDFhNzAwMjE5ZjNjM2YiLCJpYXQiOjE2MjkzMDMzMDd9.hQvbprVSC3iqDFNO9_xGgb-95zLRg3KFwGUstJmCew4",
            }
        });
        const data = await response.json();
        setGetUser(data);
    }
    catch (e) {
        console.error("error",e);
    }
}


//Funcion para llamar el fetch de la API con sus producos 
async function requestGetProducts(setProductList) {
    try {
        const response = await fetch(`${API_URL}/products`, {
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMzIwYmMxZDFhNzAwMjE5ZjNjM2YiLCJpYXQiOjE2MjkzMDMzMDd9.hQvbprVSC3iqDFNO9_xGgb-95zLRg3KFwGUstJmCew4",
            }
        });
        const data = await response.json();
        setProductList(data);
    }
    catch (e) {
        console.error("error",e);
    }
}

// //Funcion con fetch para adicionar los puntos de un usuario 
async function requestAddPoints(setAddPoints) {
    try {
        const response = await fetch(`${API_URL}/user/points`, {
            method:"POST",
            body:JSON.stringify({ amount:"1000" }),
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMzIwYmMxZDFhNzAwMjE5ZjNjM2YiLCJpYXQiOjE2MjkzMDMzMDd9.hQvbprVSC3iqDFNO9_xGgb-95zLRg3KFwGUstJmCew4",
            }
        });
        const data = await response.json();
        setAddPoints(data);
    }
    catch (e) {
        console.error("error",e);
    }
}


// function requestPoints(){
//     return fetch ('https://coding-challenge-api.aerolab.co/user', {
//         method:"POST",
//         body:JSON.stringify({productId:redeemedProduct}),
//         headers:{
//             "content-type":"application/json",
//             Accept:"application/json",
//             Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMzIwYmMxZDFhNzAwMjE5ZjNjM2YiLCJpYXQiOjE2MjkzMDMzMDd9.hQvbprVSC3iqDFNO9_xGgb - 95zLRg3KFwGUstJmCew4",
//         }
//     })
// }
export { requestGetProducts, requestGetUser, requestAddPoints }