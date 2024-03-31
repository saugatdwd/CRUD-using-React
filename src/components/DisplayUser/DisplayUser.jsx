import React from "react";
import { Link } from "react-router-dom";
import { getListOfUsers, updateUserList } from "../../services/localStorage";

const DisplayUser = () => {
    const [users, setUsers] = React.useState([]);
    const [editingUser, setEditingUser] = React.useState(null);

    React.useEffect(() => {
        const listOfUsers = getListOfUsers();
        setUsers(listOfUsers);
    }, []);

    const handleDelete = (userId) => {
        const usersList = getListOfUsers();
        const updatedList = usersList.filter(user => user.id !== userId);
        updateUserList(updatedList);
        setUsers(updatedList);
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    console.log(users, '<----users')
    return (
        <div>
            {/* <h1 className="text-center">Manage Employees</h1> */}

            {users.length > 0 ? (
                <div className="relative overflow-x-auto mt-4">
                    <table className="w-100 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Phone Number</th>
                                <th scope="col" className="px-6 py-3">Date of Birth</th>
                                <th scope="col" className="px-6 py-3">City</th>
                                <th scope="col" className="px-6 py-3">District</th>
                                <th scope="col" className="px-6 py-3">Province</th>
                                <th scope="col" className="px-6 py-3">Country</th>
                                <th scope="col" className="px-6 py-3">Profile Picture</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.city}</td>
                                    <td>{user.district}</td>
                                    <td>{user.province}</td>
                                    <td>{user.country}</td>
                                    <td>
                                        <img height={50} width={50} src={user.profilePicture} alt="Profile" />
                                    </td>
                                    <td>
                                        <div className="flex gap-3">
                                            {/* Use Link to pass editingUser to CreateUser component */}
                                            <Link
                                                to={{
                                                    pathname: `/edituser/${user.id}`,
                                                    state: { editingUser: user }
                                                }}
                                            >
                                                <button className="bg-blue-500 px-4 py-2 text-white rounded-lg"
                                                onClick={() => handleEdit(user)}>
                                                    Edit
                                                </button>
                                            </Link>
                                            <button
                                                className="bg-red-500 px-4 py-2 text-white rounded-lg"
                                                onClick={() => handleDelete(user.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h2 className="text-center">No employees</h2>
            )}
        </div>
    );
};

export default DisplayUser;
