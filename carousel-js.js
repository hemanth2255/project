var i = 1;

function slide() {
    if (i == 1) {
        imageslidernext();

    } else {
        imagesliderprev();
    }
    resettime();

}

function resettime() {
    clearTimeout(taime);
    taime = setInterval(slide, 5000);
}

function imageslidernext() {
    if (i == 1)
    {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://hackernoon.com/hn-images/0*IqWjd9Oy8CX3ay5E.jpg")';
        document.getElementById("sliderdiv").style.transition = '0.5s';
        i++;
    }

    if (i == 2) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://singularityhub.com/wp-content/uploads/2020/08/L1010064_WebRes-3d-printed-house-mighty-buildings.jpg")';
        document.getElementById("sliderdiv").style.transition = '0.5s';
        i++;
    }

    if (i == 3) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://i.pinimg.com/originals/9c/d4/f4/9cd4f441eb8a734c615ecd52ff84a10a.jpg")';
        document.getElementById("sliderdiv").style.transition = '0.5s';
        i++;
    }

    if (i == 4) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://www.rethinktokyo.com/sites/default/files/styles/article-full/public/daiwa.jpg?itok=eah6twD-")';
        document.getElementById("sliderdiv").style.transition = '0.5s';
        i = 1;
    }



}

function imagesliderprev() {
    if (i == 3)
    {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://hackernoon.com/hn-images/0*IqWjd9Oy8CX3ay5E.jpg")';
        document.getElementById("sliderdiv").style.transition = '0.5s';
        i--;
    }

    if (i == 4) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://singularityhub.com/wp-content/uploads/2020/08/L1010064_WebRes-3d-printed-house-mighty-buildings.jpg")';
        document.getElementById("sliderdiv").style.transition = '0.5s';
        i--;
    }

    if (i == 1) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://i.pinimg.com/originals/9c/d4/f4/9cd4f441eb8a734c615ecd52ff84a10a.jpg")';
        document.getElementById("sliderdiv").style.transition = '0.5s';
        i = 4;
    }

    if (i == 2) {
        document.getElementById("sliderdiv").style.backgroundImage = 'url("https://www.rethinktokyo.com/sites/default/files/styles/article-full/public/daiwa.jpg?itok=eah6twD-")';
        document.getElementById("sliderdiv").style.transition = '0.5s';
        i--;
    }

}
var taime = setInterval(function() {

        imageslidernext();

}, 5000);