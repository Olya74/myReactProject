export const getUsers = async (url) => {
try{
    const response=await fetch(url);
    if(!response.ok){
        throw new Error(`status: ${response.status}`);
    }
    const data=await response.json();
    return data;
}catch(error){
    console.error(error);
}
}


// export const addToOrder=async(url,order)=>{
//     try{
//         const response=await fetch(url,{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json",
//             },
//             body:JSON.stringify(order),
//         });
//         if(!response.ok){
//             throw new Error(`status: ${response.status}`);
//         }
//         const data=await response.json();
//         return data;
//     }catch(error){
//         console.error(error);
//     }
// }
const getProducts = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.products) {
        throw new Error("No products found");
        }
        return data
    } catch (error) {
        console.error(error);
    }
};

 const submitLogin = async (user) => {
   try {
     const response = await fetch("http://localhost:5000/login", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(user),
     });
     if (!response.ok) {
       setMyError("User doesn't exists");
       throw new Error(`status: ${response.status}`);
     }
     const data = await response.json();
     if (!data.user) {
       setMyError("User not found");
       return;
     }
     setSuccess(data.message);
     dispatch({ type: "LOG_IN_USER", payload: data.user });
   } catch (error) {
     console.error(error);
   }
 };


