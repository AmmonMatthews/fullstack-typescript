// interface User {
//     name: string,
//     age: number, 
//     email: string
// }

// const user = (userObj: User) => {
//     console.log(userObj.name)
// }

// const obj = {
//     name: "Wendy", 
//     age: 20,
//     email: ""
// }

// user(obj)


let helloWorld: string = "hello World!!!"
console.log(helloWorld)

// The biggest thing with typescript is that when the compiler runs the code it wilil catch all of the errors but will still compile data into the designated folder in the output folder. 

//Setup the application for the mobile app similar to what you have here. Create the dev scripts and the watch script so that the compiler will automatically watch for changes and look in to ts-node. I don't remember exactly what that does. creat the tsc -w script and the nodemone script out of the build/dist folder to be able to run the project potentially. 

//The application will still run even if the compiler is running errors. 