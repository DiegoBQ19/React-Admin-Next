import {Create, ReferenceInput, SimpleForm, TextInput} from "react-admin";

const PostCreate = () => {
    return (<Create>
        <SimpleForm>
            <ReferenceInput name="user" source="userId" reference="users"/>
            <TextInput name="title" source="title"/>
            <TextInput name="body" source="body" multiline rows={5}/>
        </SimpleForm>
    </Create>)
}

export default PostCreate;