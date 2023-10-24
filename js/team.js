let imagebx = document.querySelectorAll('.img-box');
let contentbx = document.querySelectorAll('.content-box');

for (let i = 0; i < imagebx.length; i++) {
    imagebx[i].addEventListener('click', function () {
        for (let j = 0; j < contentbx.length; j++) {
            contentbx[j].className = 'content-box';
        }
        let contentId = this.getAttribute('data-id');
        document.getElementById(contentId).className = "content-box active";

        for (let j = 0; j < imagebx.length; j++) {
            imagebx[j].className = 'img-box';
        }
        this.className = 'img-box active';
    })
}
