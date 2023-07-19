const menu = [
  {
    id: 1,
    title: "buttermilk pancackes" ,
    category: "breakfast",
    price: 15.99,
    img: 'https://raw.githubusercontent.com/swapnilsparsh/30DaysOfJavaScript/master/85%20-%20Menu%20Filter/images/item-1.jpeg' ,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle`,
  },
  {
    id: 2,
    title: "diner double" ,
    category: "lunch",
    price: 13.99,
    img: 'https://raw.githubusercontent.com/swapnilsparsh/30DaysOfJavaScript/master/85%20-%20Menu%20Filter/images/item-2.jpeg' ,
    desc: `Marfa thundercats`,
  },
  {
    id: 3,
    title: "godzilla milkshake" ,
    category: "shakes",
    price: 6.99,
    img: 'https://raw.githubusercontent.com/swapnilsparsh/30DaysOfJavaScript/master/85%20-%20Menu%20Filter/images/item-3.jpeg' ,
    desc: `ombucha chillwave fanny pack 3 wolf`,
  },
  {
    id: 4 ,
    title: "country delight" ,
    category: "breakfast",
    price: 20.99,
    img: 'https://raw.githubusercontent.com/swapnilsparsh/30DaysOfJavaScript/master/85%20-%20Menu%20Filter/images/item-4.jpeg' ,
    desc: `Prism austin mlkshk truffaut`,
  },
  {
    id: 5,
    title: "egg attack" ,
    category: "lunch",
    price: 22.99,
    img: 'https://raw.githubusercontent.com/swapnilsparsh/30DaysOfJavaScript/master/85%20-%20Menu%20Filter/images/item-5.jpeg' ,
    desc: `franzen vegan pabst bicycle rights `,
  },
  {
    id: 6,
    title: "oreo dream" ,
    category: "shakes",
    price: 18.99,
    img: 'https://raw.githubusercontent.com/swapnilsparsh/30DaysOfJavaScript/master/85%20-%20Menu%20Filter/images/item-6.jpeg' ,
    desc: `Portland chicharrones ethical edison bulb`,
  },
  {
    id: 7,
    title: "bacon overflow" ,
    category: "breakfast",
    price: 8.99,
    img: 'https://raw.githubusercontent.com/swapnilsparsh/30DaysOfJavaScript/master/85%20-%20Menu%20Filter/images/item-7.jpeg' ,
    desc: `carry jianbing normcore freegan`,
  },
  {
    id: 8 ,
    title: "american classic" ,
    category: "lunch",
    price: 12.99,
    img: 'https://raw.githubusercontent.com/swapnilsparsh/30DaysOfJavaScript/master/85%20-%20Menu%20Filter/images/item-8.jpeg' ,
    desc: `Food truck truffaut `,
  },
  {
    id: 9,
    title: "quarantine buddy" ,
    category: "shakes",
    price: 16.99 ,
    img: 'https://raw.githubusercontent.com/swapnilsparsh/30DaysOfJavaScript/master/85%20-%20Menu%20Filter/images/item-9.jpeg' ,
    desc: `edison bulb yuccie crucifix microdosing`,
  },
  {
    id: 10,
    title: "bison steak" ,
    category: "dinner",
    price: 22.99 ,
    img: 'https://raw.githubusercontent.com/swapnilsparsh/30DaysOfJavaScript/master/85%20-%20Menu%20Filter/images/item-10.jpeg' ,
    desc: `skateboard fam synth authentic semiotics`,
  },
];


const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function() {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
let displayMenu = menuItems.map(function(item) {
  return `<article class="menu-item" >
           <img src=${item.img} alt=${item.title} class="photo" />
           <div class="item-info">
           <header>
           <h4>${item.title}</h4>
           <h4 class="price">$${item.price}</h4>
           </header>
           <p class="item-text">
           ${item.desc}
           </p>
           </div>
   </article>`;
});
displayMenu = displayMenu.join("");

sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons() {
const categories = menu.reduce(
  function (values, item) {
     if(!values.includes(item.category)) {
       values.push(item.category)
     }
     return values;
  },
  ["all"]
);

const categoryBtns = categories
.map(function(category) {
  return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
  </button>`;

})
.join('');

btnContainer.innerHTML = categoryBtns;
const filterBtns = btnContainer.querySelectorAll('.filter-btn');
console.log(filterBtns);

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function(e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if(menuItem.category === category ) {
        return menuItem;
      }
    });
    if(category === 'all') {
      displayMenuItems(menu)
    } else {
      displayMenuItems(menuCategory);
    }
  })
}) 

}