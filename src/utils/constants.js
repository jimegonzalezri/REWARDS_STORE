//Funcion para llamar el fetch de la API 
async function requestGetProducts(setProductList) {
    try {
        const response = await fetch('https://coding-challenge-api.aerolab.co/products', {
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
        console.error(e);
    }
}

// function requestPost(){
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
export { requestGetProducts }