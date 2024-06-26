function bulbToggle(){
    let bulb = document .getElementById('lightbulb');

    if(bulb.src.match('https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg')){
        bulb.src= 'https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg'
    } else {
        bulb.src = 'https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg'
    }

}
