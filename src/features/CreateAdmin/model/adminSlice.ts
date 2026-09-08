import { createSlice } from "@reduxjs/toolkit";
import type { RegistrData } from "../../RegistrationForm/RegistrationForm";

interface IAdminModal extends RegistrData {
    isOpen: boolean
}
const initialState:  IAdminModal = {
    firstName: '',
    lastName: '',
    email: "",
    password: "",
    isOpen: false
}

const adminSlice = createSlice({
    name: "admin/create",
    initialState,
    reducers: {
        openAdmin(state){
            state.isOpen = true
        },
        closeAdmin(state) {
            state.isOpen = false
        }
    }
})

export const {openAdmin, closeAdmin} = adminSlice.actions;
export const CreateAdminReducer = adminSlice.reducer