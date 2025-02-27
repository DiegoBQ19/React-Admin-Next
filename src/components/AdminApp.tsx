"use client"; // remove this line if you choose Pages Router
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostShow, PostEdit, PostCreate, PostList } from '@/components/posts';
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import { UserList, UserShow } from '@/components/user-list';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            icon={PersonIcon}
            name="users"
            list={UserList}
            show={UserShow}
            recordRepresentation="name"
        />
        <Resource
            icon={ArticleIcon}
            name="posts"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            show={PostShow}
            recordRepresentation="title"
        />
    </Admin>
);

export default AdminApp;