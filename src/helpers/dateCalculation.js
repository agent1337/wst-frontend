export const getAge = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export const getDay = (dateString) => {
    let birthDate = new Date(dateString);
    let day = birthDate.getDay();
    let res;

    switch (day) {
        case 1:
            res = "Monday";
            break;
        case 2:
            res = "Tuesday";
            break;
        case 3:
            res = "Wendesday";
            break;
        case 4:
            res = "Thursday";
            break;
        case 5:
            res = "Friday";
            break;
        case 6:
            res = "Saturday";
            break;
        case 7:
            res = "Sunday";
            break;
        default:
            res = "day";
    }

    return res;
}
