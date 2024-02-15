const elMainList = document.querySelector('.main-list');
const elInput = document.querySelector('.header-input');
const elInputLogo = document.querySelector('.input_logo');
const elBtnMoon = document.querySelector('.btn-moon');
const elBtnSun = document.querySelector('.btn-sun');

pokemons.forEach((item) => {
    const elItem = document.createElement('li');
    const elItemImg = document.createElement('img');
    const elItemLine = document.createElement('hr');
    const elItemBox = document.createElement('div');
    const elItemName = document.createElement('h4');
    const elItemType = document.createElement('p');
    const elItemWeight = document.createElement('span');
    const elImgHeart = document.createElement('img');
    const elImgHeartRed = document.createElement('img');


    elItemImg.src = item.img;
    elItemName.textContent = item.name;
    elItemType.textContent = item.type;
    elItemWeight.textContent = item.weight + ' ' + item.candy_count;
    elImgHeart.src = item.imgLogo;
    elImgHeartRed.src = item.imgLogoRed;


    elMainList.append(elItem);
    elItem.append(elItemImg, elItemLine, elItemBox);
    elItemBox.append(elItemName, elItemType, elImgHeart, elImgHeartRed, elItemWeight);

    elInput.addEventListener('input', () => {
        elInputLogo.style.display = 'none';
    })

    elImgHeartRed.style.display = 'none';

    elImgHeart.addEventListener('click', () => {
        elImgHeartRed.style.display = 'inline-block';
        elImgHeart.style.display = 'none';
    })

    elImgHeartRed.addEventListener('click', () => {
        elImgHeart.style.display = 'inline-block';
        elImgHeartRed.style.display = 'none';
    })

    elBtnMoon.addEventListener('click', () => {
        elBtnMoon.style.cssText = `
            position: absolute;
            font-size: 14px;
            top: 44px;
            right: 114px;
        `

        elBtnSun.style.cssText = `
            position: absolute;
            font-size: 30px;
            top: 60px;
            right: 130px;
        `

        document.body.style.background = 'url("https://avatars.mds.yandex.net/i?id=97b6197c6ad4ef8d8e4772c4674d122166893e4b-12150810-images-thumbs&n=13")';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPositionX = '0';
        document.body.style.backgroundSize = 'cover';
    })

    elBtnSun.addEventListener('click', () => {
        elBtnSun.style.cssText = `
            position: absolute;
            font-size: 14px;
            top: 44px;
            right: 114px;
        `

        elBtnMoon.style.cssText = `
            position: absolute;
            font-size: 30px;
            top: 60px;
            right: 130px;
        `
        document.body.style.background = '';
    })
})