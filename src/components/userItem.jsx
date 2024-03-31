import React from "react";

export const UserItem = () => {
    return(
        <tr>
            <th>User Example</th>
            <th>use@user.com</th>
            <th>address</th>
            <th>12345678</th>
            <th><div className="flex gap-3">
                <span role="button" className="bg-green-300">
                    Edit
                </span>
                <span role="button" className="bg-red-700">
                    Delete
                </span>
                </div></th>
        </tr>
    )
}