const tokenState = "";
export const getToken = () => {
    return localStorage.getItem(tokenState);
};

export const setToken = (newToken) => {
    localStorage.setItem(tokenState, newToken);
};

export const clearToken = () => {
    localStorage.removeItem(tokenState);
};