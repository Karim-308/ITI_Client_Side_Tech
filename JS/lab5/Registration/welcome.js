let params =new URLSearchParams(location.search)

        let name = params.get("name");
        let title = params.get("title");
        let email = params.get("email");
        let mobile = params.get("mobile");
        let address = params.get("address");
        let gender = params.get("gender");


   document.body.innerHTML = `
    <h1>Welcome, ${title}. ${name}!</h1>
    <h3>Email: ${email}</h3>
    <h3>Mobile: ${mobile}</h3>
    <h3>Address: ${address}</h3>
    <h3>Gender: ${gender}</h3>
`;
