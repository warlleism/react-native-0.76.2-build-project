import React, { createContext, useContext, useState, ReactNode } from 'react';
interface AuthContextProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = () => {
        setIsAuthenticated(true)
    };
    const logout = () => setIsAuthenticated(false);

    return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;

}

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};