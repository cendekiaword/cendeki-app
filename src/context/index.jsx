"use client"
import { editProfile, profile } from "@/actions/actions"
import { createContext, useContext, useEffect, useState } from "react"



const AppContext = createContext()


export function AppWrapper({children}){
    const [state, setState] = useState({})

    async function getProfile(){
        let res = await profile()
        setState(res)
      }

    useEffect(() => {
        getProfile()
      },[editProfile])

    return (
        <AppContext.Provider value={{state, getProfile}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}