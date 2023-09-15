import {useContext} from "react";
import {RoleContext} from "../roleContext";

export const useRoleActions = () => {
    const {
        onAddRole,
        onDelRole,
        onEditRole,
        setRoles,
    } = useContext(RoleContext)
    return {
        onAddRole,
        onDelRole,
        onEditRole,
        setRoles,
    }
}