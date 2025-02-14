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