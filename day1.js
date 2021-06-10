function santaDelivery(dir) {
    var floor = 0;
    for (var i = 0; i < dir.length; i++) {
        if (dir.charAt(i) == '(') {
            floor++;
        } else {
            if (dir.charAt(i) == ')') {
                floor--;
            } else {
                console.log("Error");
            }
        }
        if (floor == -1) {
            console.log("Enter the basement in position " + (i+1));
        }
    }
    return floor;
}