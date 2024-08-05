import { createContext, ReactNode, useReducer, useCallback, useContext } from "react";

export type Theme = "light" | "dark";

type ThemeState = {
    theme: Theme;
}

type ThemeAction = 
    | { type: "setTheme"; payload: "light" | "dark" }
    
function useThemeSource() : {
    theme: "light" | "dark",
    setTheme: (theme: "light" | "dark") => void;
    }  {

    const [{ theme }, dispatch] = useReducer(
        (state: ThemeState, action: ThemeAction) => {
            switch (action.type){
                case "setTheme":
                    return {...state, theme: action.payload}
            }
    }, 
    {
        theme: "light",
    });
    
    const setTheme = useCallback((theme: "light" | "dark") => {
        dispatch({type: "setTheme", payload: theme})
    }, []);

    return { theme, setTheme }
}

const ThemeContext = createContext<ReturnType<typeof useThemeSource>>(
    {} as unknown as ReturnType<typeof useThemeSource>
);

const useThemeContext = () => {
    return useContext(ThemeContext);
}

const ThemeProvider = ({ children }: { children: ReactNode }) => {

    return (
        <ThemeContext.Provider value={useThemeSource()}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, useThemeContext };