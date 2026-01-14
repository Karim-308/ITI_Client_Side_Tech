var users = fetch("https://jsonplaceholder.typicode.com/users").then((response)=> {
if (!response)     throw new Error("Network error")  
    return response.json();

}).then(data => console.log("Data" + data))
.catch(e => console.log("Error fetching users",e)) 