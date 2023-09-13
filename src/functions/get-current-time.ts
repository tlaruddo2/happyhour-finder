export const getCurrentTime = (): string => { 
    const date = new Date();

    return date.getHours() + ":" + date.getMinutes();
}