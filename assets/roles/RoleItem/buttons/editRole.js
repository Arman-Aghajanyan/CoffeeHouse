import {useDispatch} from "react-redux";
import {handleEdit} from "../../../../store/Slices/editRolesSlice";

export const EditRole = ({id, title, img}) => {
    const dispatch = useDispatch()

    const handleEditItem = (id, title, img) => {
        dispatch(handleEdit({id, title, img}))
    }


  return (
      <>
        <div  className="editButton delButton" onClick={() =>handleEditItem(id, title, img)} >Edit</div>
      </>
  );
};
