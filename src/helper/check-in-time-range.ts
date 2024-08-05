export const checkInTimeRange = ( start: string, end: string, input: string ) :boolean => { 
    let startTimeArr = start.split(":");
    let endTimeArr = end.split(":");
    let inputTimeArr = input.split(":");

    let curretTime = new Date();
    let startTime = new Date(curretTime.getFullYear(), curretTime.getMonth(), curretTime.getDate(), parseInt(startTimeArr[0]), parseInt(startTimeArr[1]));
    let endTime = new Date(curretTime.getFullYear(), curretTime.getMonth(), curretTime.getDate(),parseInt(endTimeArr[0]), parseInt(endTimeArr[1]));
    let inputTime = new Date(curretTime.getFullYear(), curretTime.getMonth(), curretTime.getDate(),parseInt(inputTimeArr[0]), parseInt(inputTimeArr[1]));

    if (inputTime >= startTime && inputTime <= endTime){
        return true;
    }
    return false;
}
