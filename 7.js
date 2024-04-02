// const getUsers=fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>{
//     if(!response.ok){
//         throw new Error("not ok")
//     }
//     return response.json();
// })
// .then(data=>console.log(data))
// .catch(error=>console.log("Error:",error))






const getUsers=fetch(' https://jsonplaceholder.typicode.com/users')
.then(response =>response.json())
.then(items=>{
    
   
    const nameElement=document.getElementById("Namee")
    const emailelement=document.getElementById("Email")
    items.forEach(element => {
        const button=document.getElementById("button")
button.addEventListener("click",getUsers)

        const nameElementdiv=document.createElement("div")
        const emailelementdiv=document.createElement("div")
        nameElement.textContent=element.name;
        emailelement.textContent=element.email;
        
        nameElement.append(nameElementdiv)
        emailelement.append(emailelementdiv)
    });
})
.then(data=>console.log(data))
.catch(error=>console.log(error))

