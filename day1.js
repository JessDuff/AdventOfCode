var floor = 0;
function santaDelivery(dir) {
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
    }
    return floor;
}