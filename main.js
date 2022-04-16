function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sSjb412_T/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);

}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        img = document.getElementById('meow')
        img1 = document.getElementById('bark')
        img2 = document.getElementById('moow')
        img3 = document.getElementById('roar')

        if (results[0].label == "meow") {
            img.src = 'gif.gif';
            img1.src = 'Dog.jpg'
            img2.src = 'cow.jpg';
            img3.src = 'tiger.jpg';
        } else if (results[0].label == "bark") {
            img.src = 'Felix.jpg';
            img1.src = 'weiner dog.gif';
            img2.src = 'cow.jpg';
            img3.src = 'tiger.jpg';
        } else if (results[0].label == "roar") {
            img.src = 'Felix.jpg';
            img1.src = 'Dog.jpg';
            img2.src = 'cow.jpg'
            img3.src = 'angry-tiger.gif';
        } else {
            img.src = 'Felix.jpg';
            img1.src = 'Dog.jpg';
            img2.src = 'rice.gif';
            img3.src = 'tiger.jpg';
        }
    }
}