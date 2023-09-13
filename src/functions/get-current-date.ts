export const getCurrentDate = (): string => { 
    let currentDateObject = new Date(); 
    let year = currentDateObject.getFullYear();
    let m = currentDateObject.getMonth() + 1
    let month = m < 10 ? "0" + m : m;

    let date = currentDateObject.getDate();

    return year + "-" + month + "-" + date;   
}