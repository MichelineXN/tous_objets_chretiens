import { useState, useEffect, useContext, createContext } from 'react';
import userProfileService from './services/userProfileService';

// Création d'un contexte pour le profil de l'utilisateur
const UserProfileContext = createContext(null);

export const UserProfileProvider = ({ children }) => {
    const userProfile = useUserProfile();
    return <UserProfileContext.Provider value={userProfile}>{children}</UserProfileContext.Provider>;
};

export const useUserProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await userProfileService.getUserProfile();
                setProfile(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    return { profile, loading, error, setProfile };
};

// Hook pour accéder au contexte du profil de l'utilisateur
export const useProfileContext = () => {
    const context = useContext(UserProfileContext);
    if (!context) {
        throw new Error('useProfileContext must be used within a UserProfileProvider');
    }
    return context;
};
