const DayOfTheWeek = (day) => {
    switch (day) {
        case 0:
            day = 'Mon';
            break;
        case 1:
            day = 'Tue';
            break;
        case 2:
            day = 'Wed';
            break;
        case 3:
            day = 'Thu';
            break;
        case 4:
            day = 'Fri';
            break;
        case 5:
            day = 'Sat';
            break;
        case 6:
            day = 'Sun';
            break;
        default:
            day = 'Mon';
    }
    return day;
}

export default DayOfTheWeek;