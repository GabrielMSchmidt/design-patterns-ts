import PermissionType from "./PermissionType";

interface DatabaseItem{
    email: string;
    password: string;
    permission: PermissionType;
}

const Database: DatabaseItem[] = [
    {
        email: "gabriel@gmail.com",
        password: "123456",
        permission: PermissionType.ADMIN
    },
    {
        email: "lucas@gmail.com",
        password: "123456",
        permission: PermissionType.USER
    },
    {
        email: "dick@gmail.com",
        password: "123456",
        permission: PermissionType.USER
    },
];
export default Database;