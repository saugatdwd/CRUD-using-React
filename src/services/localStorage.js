// import uuid from "react-uuid";

// export const getListOfUsers = () => {
//     if(!localStorage["@users"]){
//         localStorage["@users"] = JSON.stringify([]);
//     }

//     let users = JSON.parse(localStorage["@users"]);

//     return users;
// }

// export const addUser = (user) => {
//     const users = getListOfUsers();
//     users.push({id: uuid(), ...user});
//     localStorage["@users"] = JSON.stringify(users);
// }

// Import the uuid package
import { v4 as uuidv4 } from 'uuid';

// Function to get the list of users from local storage
export const getListOfUsers = () => {
    // Check if the list of users exists in local storage, if not, initialize it as an empty array
    if (!localStorage.getItem("@users")) {
        localStorage.setItem("@users", JSON.stringify([]));
    }

    // Retrieve and parse the list of users from local storage
    return JSON.parse(localStorage.getItem("@users"));
}

// Function to add a new user to the list in local storage
export const addUser = (user) => {
    // Get the current list of users from local storage
    const users = getListOfUsers();
    // Generate a unique ID for the new user using uuidv4
    const id = uuidv4();
    // Add the new user with the generated ID to the list
    users.push({ id, ...user });
    // Update the list of users in local storage
    localStorage.setItem("@users", JSON.stringify(users));
}

// Function to update the list of users in local storage
export const updateUserList = (updatedList) => {
    // Update the list of users in local storage with the provided updated list
    localStorage.setItem("@users", JSON.stringify(updatedList));
}
