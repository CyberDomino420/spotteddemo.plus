const listings = [
  { id:1, title:'Mieszkanie 2-pok.', price:350000, location:'Warszawa', img:'https://via.placeholder.com/320x180' },
  { id:2, title:'Używany rower MTB', price:1200, location:'Kraków', img:'https://via.placeholder.com/320x180' },
  { id:3, title:'Naprawa laptopów – usługi', price:'cena do uzgodnienia', location:'Poznań', img:'https://via.placeholder.com/320x180' },
];
function renderList() {
  const cont = document.getElementById('listings');
  cont.innerHTML = '';
  const maxPrice = +document.getElementById('priceRange').value;
  listings.filter(o => typeof o.price==='string' || o.price<=maxPrice).forEach(o => {
    const div = document.createElement('div');
    div.className='listing';
    div.innerHTML=`
      <img src="${o.img}" alt="${o.title}" />
      <h3>${o.title}</h3>
      <p>${o.price} PLN</p><p>${o.location}</p>
    `;
    cont.appendChild(div);
  });
}
document.getElementById('priceRange').addEventListener('input',renderList);
renderList();
