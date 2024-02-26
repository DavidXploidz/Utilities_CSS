// Globals
const containerPages = document.querySelector('#container-pages');

const data = [
    {
        id: 1, 
        name: 'Colors',
        link: 'https://flatuicolors.com/',
    },
    {
        id: 2,
        name: 'Fake JSON',
        link: 'https://www.mockaroo.com/',
    },
    {
        id: 3,
        name: 'Icons',
        link: 'https://boxicons.com/',
    },
    {
        id: 4,
        name: 'Reposive Text Sizes',
        link: 'https://utopia.fyi/type/calculator/',
    },
    {
        id: 5,
        name: 'Launch Icon Generator',
        link: `http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html`
    },
    {
        id: 6,
        name: 'Css Filter Color Generator',
        link: 'https://angel-rs.github.io/css-color-filter-generator/'
    },
    {
        id: 7,
        name: 'Box Shadows',
        link: 'https://box-shadow.dev/'
    },
    {
        id: 8,
        name: 'Fancy Illustrations',
        link: 'https://storyset.com/'
    },
    {
        id: 9,
        name: 'Palette Color Generator',
        link: 'https://uicolors.app/create'
    },
    {
        id: 10,
        name: 'Generate SVG Waves',
        link: 'https://svgwave.in/'
    },
    {
        id: 11,
        name: 'Grids Examples Layouts',
        link: 'https://bentogrids.com/'
    },
    {
        id: 12,
        name: 'BG Gradients and Figures',
        link: 'https://app.haikei.app/'
    },
    {
        id: 13,
        name: 'Avatar User Pictures',
        link: 'https://www.pravatar.cc/'
    },
    {
        id: 14,
        name: 'Sliders JS',
        link: 'https://swiperjs.com/'
    }
];

document.addEventListener('DOMContentLoaded', function(){
    loadPages();
});

function loadPages(){
    data.forEach(item => {
        const article = document.createElement('ARTICLE');
        article.classList.add('card-page');
        const link = document.createElement('A');
        link.href = item.link;
        link.target = '_blank';
        link.textContent = item.name;

        article.appendChild(link);
        containerPages.appendChild(article);
    })
}