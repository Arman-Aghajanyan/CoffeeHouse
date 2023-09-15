import React from 'react';
import DeleteRole from "./buttons/deleteRole";
import {EditRole} from "./buttons/editRole";

function EditDelButtons({id, title, img}) {
    return (
        <div className="edit-deleteButtons flex">
            <DeleteRole id={id} /> <EditRole id={id} title={title} img={img} />
        </div>
    );
}

export default EditDelButtons;