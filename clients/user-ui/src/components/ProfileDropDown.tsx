'use client'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { useState } from "react"
import { CgProfile } from "react-icons/cg"
import AuthScreen from "../screens/AuthScreen"

const ProfileDropDown = () => {
    const [signedIn, setsignedIn] = useState(false)
    const [open, setOpen] = useState(false)

return (
    <div className="flex items-center gap-4">
       {
        signedIn ? (
             <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar 
                as="button"
                className="transition-transform"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">support@becodemy.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Profile</DropdownItem>
                <DropdownItem key="all_orders">All Orders</DropdownItem>
                <DropdownItem key="team_settings">Apply for seller account</DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        ) : (
            <CgProfile
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
            />
        )
       }
       {
        open && (
            <AuthScreen />
        )
       }
    </div>
)
}

export default ProfileDropDown