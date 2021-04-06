function ex8(width, height){
    for (let j=0; j<height; j++){
        var line = "";
        for (let i=0; i < width; i++){

            if (j == 0 || j == height - 1 || i == 0 || i == width - 1){
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }

}

ex8(10,5)