// data glasses
let dataGlasses = [{
        id: "G1",
        src: "./img/g1.jpg",
        virtualImg: "./img/v1.png",
        brand: "Armani Exchange",
        name: "Bamboo wood",
        color: "Brown",
        price: 150,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis?"
    },
    {
        id: "G2",
        src: "./img/g2.jpg",
        virtualImg: "./img/v2.png",
        brand: "Arnette",
        name: "American flag",
        color: "American flag",
        price: 150,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio."
    },
    {
        id: "G3",
        src: "./img/g3.jpg",
        virtualImg: "./img/v3.png",
        brand: "Burberry",
        name: "Belt of Hippolyte",
        color: "Blue",
        price: 100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        id: "G4",
        src: "./img/g4.jpg",
        virtualImg: "./img/v4.png",
        brand: "Coarch",
        name: "Cretan Bull",
        color: "Red",
        price: 100,
        description: "In assumenda earum eaque doloremque, tempore distinctio."
    },
    {
        id: "G5",
        src: "./img/g5.jpg",
        virtualImg: "./img/v5.png",
        brand: "D&G",
        name: "JOYRIDE",
        color: "Gold",
        price: 180,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?"
    },
    {
        id: "G6",
        src: "./img/g6.jpg",
        virtualImg: "./img/v6.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Blue, White",
        price: 120,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        id: "G7",
        src: "./img/g7.jpg",
        virtualImg: "./img/v7.png",
        brand: "Ralph",
        name: "TORTOISE",
        color: "Black, Yellow",
        price: 120,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam."
    },
    {
        id: "G8",
        src: "./img/g8.jpg",
        virtualImg: "./img/v8.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Red, Black",
        price: 120,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim."
    },
    {
        id: "G9",
        src: "./img/g9.jpg",
        virtualImg: "./img/v9.png",
        brand: "Coarch",
        name: "MIDNIGHT VIXEN REMIX",
        color: "Blue, Black",
        price: 120,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet."
    }
];

//import cac doi tuong vao main
import {Glasses} from './glasses.js';
import {GlassesList} from './glassesList.js';

let glassesList = new GlassesList();
// Ham rut gon lay elementbyId
const getEle = (id) => {
    return document.getElementById(id);
}

//Hien thi danh sach kinh
const showGlassesList = () => {

    let divGlassesList = getEle('vglassesList');
    // tao doi tuong kinh va them kinh vao danh sach kinh
    // duyet mang data
    dataGlasses.map((item, index ) => {
        let gl = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.price, item.description);
        glassesList.addGlasses(gl);
    });
    console.log(glassesList);
    divGlassesList.innerHTML = glassesList.renderGlasses();
}

showGlassesList();

const tryOnGlasees = (e) => {
    // console.log(e.target.getAttribute('data-id'));
    let glID = e.target.getAttribute('data-id');
    let glObject = {};
    for(let value of glassesList.glist) {
        if(value.id == glID) {
            glObject = value;
        }
        
    }
    showInfo(glObject);
}

// chuyen ham tryOn thanh window de dau cung dung dc
window.tryOnGlasees = tryOnGlasees;

const showInfo = (glObject) => {
    let divAvatar = getEle('avatar');
    let divInfo = getEle('glassesInfo');

    divAvatar.innerHTML = `
        <img src="${glObject.virtualImg}">
    `;

    let status = "";
    if (glObject.status) {
        status = "Stoking";
    } else {
        status = "Sold Out";
    }

    divInfo.innerHTML = `
        <h5>${glObject.name} - ${glObject.brand} (${glObject.color})</h5>
        <p class="card-text">
            <span class="btn btn-danger btn-sm mr-2">$${glObject.price}</span>
            <span class="text-success">$${status}</span>
        </p>
        <p class="card-text">
            ${glObject.description}
        </p>
    `;
    divInfo.style.display = 'block';
}
