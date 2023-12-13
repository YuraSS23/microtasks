function request (){
    let promice = axios.get("https://social-network.samuraijs.com/api/1.0/users")
    return promice
}
request()
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
