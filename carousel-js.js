var i = 1;

function slide(next) {
    if (next) imageslidernext();
    else imagesliderprev();
    resettime();
}

function resettime() {
    clearTimeout(taime);
    taime = setInterval(function() {
        console.log("s");

        imageslidernext();

}, 5000);
}

function imageslidernext() {
    if (i == 1)
    {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJpem9uYSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80")';
        document.getElementById("sliderdiv").style.transition = '0.2s';
        document.getElementById("sliderdiv").style.backgroundSize = '0px -100px';
        resetBorders(1);
        i++;
    }

    else if (i == 2) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://singularityhub.com/wp-content/uploads/2020/08/L1010064_WebRes-3d-printed-house-mighty-buildings.jpg")';
        document.getElementById("sliderdiv").style.transition = '0.2s';
        resetBorders(2);
        i++;
    }

    else if (i == 3) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://i.pinimg.com/originals/9c/d4/f4/9cd4f441eb8a734c615ecd52ff84a10a.jpg")';
        document.getElementById("sliderdiv").style.transition = '0.2s';
        document.getElementById("sliderdiv").style.backgroundSize = '0px -200px';
        resetBorders(3);
        i++;
    }

    else if (i == 4) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://www.rethinktokyo.com/sites/default/files/styles/article-full/public/daiwa.jpg?itok=eah6twD-")';
        document.getElementById("sliderdiv").style.transition = '0.2s';
        resetBorders(4);
        i = 1;
    }

    else {
        alert("Error");
    }



}

function imagesliderprev() {
    if (i == 3)
    {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJpem9uYSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80")';
        document.getElementById("sliderdiv").style.transition = '0.2s';
        resetBorders(1);
        i--;
    }

    else if (i == 4) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://singularityhub.com/wp-content/uploads/2020/08/L1010064_WebRes-3d-printed-house-mighty-buildings.jpg")';
        document.getElementById("sliderdiv").style.transition = '0.2s';
        document.getElementById("sliderdiv").style.backgroundSize = '0px -200px';
        resetBorders(2);
        i--;
    }

    else if (i == 1) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://i.pinimg.com/originals/9c/d4/f4/9cd4f441eb8a734c615ecd52ff84a10a.jpg")';
        document.getElementById("sliderdiv").style.transition = '0.2s';
        resetBorders(3);
        i = 4;
    }

    else if (i == 2) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://www.rethinktokyo.com/sites/default/files/styles/article-full/public/daiwa.jpg?itok=eah6twD-")';
        document.getElementById("sliderdiv").style.transition = '0.2s';
        resetBorders(4);
        i--;
    }

    else {
        alert("Error");
    }

}
var taime = setInterval(function() {

        imageslidernext();
        console.log("s");

}, 5000);

function resetBorders(slideNumber) {

    document.getElementById("s1").style.border = '5px solid white';
    document.getElementById("s2").style.border = '5px solid white';
    document.getElementById("s3").style.border = '5px solid white';
    document.getElementById("s4").style.border = '5px solid white';

    if (slideNumber == 1) {
        document.getElementById("s1").style.border = '5px solid #22beee';
    }
    else if (slideNumber == 2) {
        document.getElementById("s2").style.border = '5px solid #22beee';
    }
    else if (slideNumber == 3) {
        document.getElementById("s3").style.border = '5px solid #22beee';
    }
    else if (slideNumber == 4) {
        document.getElementById("s4").style.border = '5px solid #22beee';
    }
}