interface User {
    name: string,
    age: number, 
    email: string
}

const user = (userObj: User) => {
    console.log(userObj.name)
}

const obj = {
    name: "Wendy", 
    age: 20,
    email: ""
}

user(obj)