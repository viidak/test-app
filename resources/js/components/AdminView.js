import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "user_id", headerName: "User ID", width: 70 },
    { field: "order_number", headerName: "Order Number", width: 200 },
    { field: "description", headerName: "Description", width: 250 },
    {
        field: "date_time",
        headerName: "Date / Time",
        width: 250,
    },
    { field: "is_archieved", headerName: "Archieved", width: 200 },
];

const AdminView = ({ loggedInData }) => {
    return (
        <div className="admin-container">
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={callbacks}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

export default AdminView;

const callbacks = [
    {
        id: 2,
        user_id: 1,
        order_number: "123cetipetsest",
        description: "neki tamo opis",
        date_time: "2021-02-15T14:00:00",
        is_archived: 0,
        created_at: "2021-02-27T19:03:25.000000Z",
        updated_at: "2021-02-27T19:03:25.000000Z",
        user: {
            id: 1,
            name: "admin",
            last_name: "user",
            user_name: "adminuser",
            email: "admin@user.com",
            phone: "1231231230",
            gender: "male",
            email_verified_at: "2021-02-26T16:52:19.000000Z",
            user_role: "admin",
            created_at: "2021-02-26T16:52:19.000000Z",
            updated_at: "2021-02-26T16:52:19.000000Z",
        },
        comments: [],
    },
    {
        id: 1,
        user_id: 2,
        order_number: "123cetipetsest",
        description: "neki tamo opis 2",
        date_time: "2021-02-15T12:00:00",
        is_archived: 0,
        created_at: "2021-02-26T17:20:32.000000Z",
        updated_at: "2021-02-26T17:20:32.000000Z",
        user: {
            id: 2,
            name: "user",
            last_name: "user",
            user_name: "useruser",
            email: "user@user.com",
            phone: "1234561230",
            gender: "female",
            email_verified_at: "2021-02-26T16:52:19.000000Z",
            user_role: "user",
            created_at: "2021-02-26T16:52:19.000000Z",
            updated_at: "2021-02-26T16:52:19.000000Z",
        },
        comments: [
            {
                id: 1,
                user_id: 1,
                callback_id: 1,
                description: "komentar 4554",
                created_at: "2021-02-26T17:22:30.000000Z",
                updated_at: "2021-02-26T17:22:30.000000Z",
                user: {
                    id: 1,
                    name: "admin",
                    last_name: "user",
                    user_name: "adminuser",
                    email: "admin@user.com",
                    phone: "1231231230",
                    gender: "male",
                    email_verified_at: "2021-02-26T16:52:19.000000Z",
                    user_role: "admin",
                    created_at: "2021-02-26T16:52:19.000000Z",
                    updated_at: "2021-02-26T16:52:19.000000Z",
                },
                callback: {
                    id: 1,
                    user_id: 2,
                    order_number: "123cetipetsest",
                    description: "neki tamo opis 2",
                    date_time: "2021-02-15 14:00:00",
                    is_archived: 0,
                    created_at: "2021-02-26T17:20:32.000000Z",
                    updated_at: "2021-02-26T17:20:32.000000Z",
                },
            },
        ],
    },
];
