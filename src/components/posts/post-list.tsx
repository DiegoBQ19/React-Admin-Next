import {
    Datagrid,
    List,
    ReferenceField,
    TextField,
    FunctionField,
    useRecordContext,
    EditButton,
    TextInput,
    ReferenceInput
} from 'react-admin';

const PostPanel = () => {
    const record = useRecordContext();
    return <div>{record?.body}</div>;
}

const PostList = () => {
    const postFilters = [
        <TextInput key="search" name="Search" label="Search" source="q" alwaysOn/>,
        <ReferenceInput key="userId" name="userId" source="userId" reference="users" label="User"/>
    ];
    return (
        <List filters={postFilters}>
            <Datagrid
                expand={<PostPanel/>}
            >
                <TextField source="id"/>
                <TextField label="Post Title" source="title"/>
                <FunctionField label="Excertp" render={(record) => `${record.body.substring(0, 50)}...`}/>
                <ReferenceField source="userId" reference="users"/>
                <EditButton/>
            </Datagrid>
        </List>
    );
}

export default PostList;