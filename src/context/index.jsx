"use client"
import { profile } from "@/actions/actions"
import { createContext, useContext, useEffect, useState } from "react"



const AppContext = createContext()


export function AppWrapper({children}){
    const [state, setState] = useState({})
    const statis = ""

    async function getProfile(){
        let res = await profile()
        setState(res)
      }

    useEffect(() => {
        getProfile()
      },[])
    // setState(getProfile())

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}