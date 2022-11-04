/** img  */
import imgSandwitch from './assets/img/sandwich.jpg';
import imgSteak from './assets/img/steak.jpg';
import imgCherry from './assets/img/cherries.jpg';
import imgWine from './assets/img/wine.jpg';
import imgPopsicle from './assets/img/popsicle.jpg';
import imgSalmon from './assets/img/salmon.jpg';
import imgCroissant from './assets/img/croissant.jpg';
/** 데이터 생성 */
// 데이터 생성에 사용할 예비 데이터들
const md1 = [{
    title: 'The perfect SandWich, Areal NYC Classic',
    description: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.',
    img: imgSandwitch,
}, {
    title: 'Let Me Tell You About This Steak',
    description: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',
    img: imgSteak
}, {
    title: 'Cherries, interrupted',
    description: 'Lorem ipsum text praesent tincidunt ipsum lipsum.',
    img: imgCherry
}, {
    title: 'Once Again, Robust Wine and Vegetable Pasta',
    description: 'Lorem ipsum text praesent tincidunt ipsum lipsum.',
    img: imgWine
}, {
    title: 'All I Need Is a Popsicle',
    description: 'Lorem ipsum text praesent tincidunt ipsum lipsum.',
    img: imgPopsicle
}, {
    title: 'Salmon For Your Skin',
    description: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',
    img: imgSalmon
}, {
    title: 'The Perfect Sandwich, A Real Classic',
    description: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.',
    img: imgSandwitch
}, {
    title: 'Le French',
    description: 'Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',
    img: imgCroissant
}];
const md2 = [
    // ---- 8 (idx 7);
    {
        title: 'Let Me Tell You About This Steak',
        description: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',
        img: imgSteak
    }, {
        title: 'Cherries, interrupted',
        description: 'Lorem ipsum text praesent tincidunt ipsum lipsum.',
        img: imgCherry
    }, {
        title: 'The Perfect Sandwich, A Real Classic',
        description: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.',
        img: imgSandwitch
    }, {
        title: 'Le French',
        description: 'Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',
        img: imgCroissant
    }, {
        title: 'The perfect SandWich, Areal NYC Classic',
        description: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.',
        img: imgSandwitch
    }, {
        title: 'Let Me Tell You About This Steak',
        description: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.',
        img: imgSteak
    }, {
        title: 'Cherries, interrupted',
        description: 'Lorem ipsum text praesent tincidunt ipsum lipsum.',
        img: imgCherry
    }, {
        title: 'Once Again, Robust Wine and Vegetable Pasta',
        description: 'Lorem ipsum text praesent tincidunt ipsum lipsum.',
        img: imgWine
    }];
// 넘버페이지에 사용할 데이터 생성 ( 구분이 가도록 두개의 데이터를 섞어서..)
let myData = [];
for (let i = 1; i <= 22; i++) {
    i % 2 === 1 ? myData.push(md1.map(v => v)) : myData.push(md2.map(v => v));
}

export default myData;