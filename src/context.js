import React, {useState , useContext} from 'react';
import { useEffect } from 'react';

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [OpenCompose, setOpenCompose] = useState(false);
    const [resizeCompose, setResizeCompose] = useState(false);
    const [hideCompose, setHideCompose] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const OpenComposeMail = () => {
        setOpenCompose(true)
    }

    const CloseComposeMail = () => {
        setOpenCompose(false)
        setResizeCompose(false)
        setHideCompose(false)
    }

    const ResizingCompose = () => {
        if(!resizeCompose) {
            setResizeCompose(!resizeCompose)
            setHideCompose(false)
        }
        else {
            setResizeCompose(false)
        }        
    }
    
    const HideCompose = () => {
        if(!hideCompose) {
            setHideCompose(!hideCompose)
            setResizeCompose(false)
        }
        else {
            setHideCompose(false)
        }
    }

    return (
        <AppContext.Provider value={{
            sidebarOpen, 
            toggleSidebar,
            OpenCompose,
            OpenComposeMail,
            CloseComposeMail,
            ResizingCompose,
            resizeCompose,
            hideCompose,
            HideCompose
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}