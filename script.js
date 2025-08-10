
/* script.js */
const table = document.getElementById('periodic-table');
const searchBox = document.getElementById('search-box');
const categoryFilter = document.getElementById('category-filter');
const randomBtn = document.getElementById('random-btn');
const randomCard = document.getElementById('random-card');
const randName = document.getElementById('rand-name');
const randFun = document.getElementById('rand-fun');
const randClose = document.getElementById('rand-close');
const detailCard = document.getElementById('detail-card');
const closeDetail = document.getElementById('close-detail');

// mapping categories to CSS classes
function catClass(cat){
  if(!cat) return 'cat-post';
  cat = cat.toLowerCase();
  if(cat.includes('alkali')) return 'cat-alkali';
  if(cat.includes('alkaline')) return 'cat-alkaline';
  if(cat.includes('lanthanide')) return 'cat-lanthanide';
  if(cat.includes('actinide')) return 'cat-actinide';
  if(cat.includes('transition')) return 'cat-transition';
  if(cat.includes('post')) return 'cat-post';
  if(cat.includes('metalloid')) return 'cat-metalloid';
  if(cat.includes('nonmetal')) return 'cat-nonmetal';
  if(cat.includes('halogen')) return 'cat-halogen';
  if(cat.includes('noble')) return 'cat-noble';
  return 'cat-post';
}

// layout positions for periodic table (row-major in 18 columns grid)
// we'll use a positions map: atomic number -> grid column start (1-based) and row (1-based)
// Simpler approach: fill grid by creating 7 main rows + lanthanide/actinide rows at bottom, using known column positions.
const positions = {
  // row1
  1:{r:1,c:1}, 2:{r:1,c:18},
  // row2
  3:{r:2,c:1},4:{r:2,c:2},5:{r:2,c:13},6:{r:2,c:14},7:{r:2,c:15},8:{r:2,c:16},9:{r:2,c:17},10:{r:2,c:18},
  // row3
  11:{r:3,c:1},12:{r:3,c:2},13:{r:3,c:13},14:{r:3,c:14},15:{r:3,c:15},16:{r:3,c:16},17:{r:3,c:17},18:{r:3,c:18},
  // row4
  19:{r:4,c:1},20:{r:4,c:2},21:{r:4,c:3},22:{r:4,c:4},23:{r:4,c:5},24:{r:4,c:6},25:{r:4,c:7},26:{r:4,c:8},27:{r:4,c:9},28:{r:4,c:10},29:{r:4,c:11},30:{r:4,c:12},31:{r:4,c:13},32:{r:4,c:14},33:{r:4,c:15},34:{r:4,c:16},35:{r:4,c:17},36:{r:4,c:18},
  // row5
  37:{r:5,c:1},38:{r:5,c:2},39:{r:5,c:3},40:{r:5,c:4},41:{r:5,c:5},42:{r:5,c:6},43:{r:5,c:7},44:{r:5,c:8},45:{r:5,c:9},46:{r:5,c:10},47:{r:5,c:11},48:{r:5,c:12},49:{r:5,c:13},50:{r:5,c:14},51:{r:5,c:15},52:{r:5,c:16},53:{r:5,c:17},54:{r:5,c:18},
  // row6
  55:{r:6,c:1},56:{r:6,c:2},57:{r:6,c:3},58:{r:6,c:4},59:{r:6,c:5},60:{r:6,c:6},61:{r:6,c:7},62:{r:6,c:8},63:{r:6,c:9},64:{r:6,c:10},65:{r:6,c:11},66:{r:6,c:12},67:{r:6,c:13},68:{r:6,c:14},69:{r:6,c:15},70:{r:6,c:16},71:{r:6,c:17},72:{r:6,c:18},
  // row7
  73:{r:7,c:1},74:{r:7,c:2},75:{r:7,c:3},76:{r:7,c:4},77:{r:7,c:5},78:{r:7,c:6},79:{r:7,c:7},80:{r:7,c:8},81:{r:7,c:9},82:{r:7,c:10},83:{r:7,c:11},84:{r:7,c:12},85:{r:7,c:13},86:{r:7,c:14},87:{r:7,c:15},88:{r:7,c:16},89:{r:7,c:17},90:{r:7,c:18},
  // lanthanides row (displayed separately but placed in row 8)
  57:{r:8,c:4},58:{r:8,c:5},59:{r:8,c:6},60:{r:8,c:7},61:{r:8,c:8},62:{r:8,c:9},63:{r:8,c:10},64:{r:8,c:11},65:{r:8,c:12},66:{r:8,c:13},67:{r:8,c:14},68:{r:8,c:15},69:{r:8,c:16},70:{r:8,c:17},71:{r:8,c:18},
  // actinides row (row9)
  89:{r:9,c:4},90:{r:9,c:5},91:{r:9,c:6},92:{r:9,c:7},93:{r:9,c:8},94:{r:9,c:9},95:{r:9,c:10},96:{r:9,c:11},97:{r:9,c:12},98:{r:9,c:13},99:{r:9,c:14},100:{r:9,c:15},101:{r:9,c:16},102:{r:9,c:17},103:{r:9,c:18}
};

// Render function
function renderTable(filterQuery='',filterCat=''){
  table.innerHTML='';
  // create 9 rows * 18 cols as empty slots (to preserve layout) using CSS grid placement
  const totalRows = 9;
  const totalCols = 18;
  // create an invisible array to hold elements by number for quick placement
  const byNumber = {};
  elements.forEach(e=> byNumber[e.number]=e);

  // iterate through positions mapping to place elements; if no element assigned, create empty placeholder
  for(let r=1;r<=totalRows;r++){
    for(let c=1;c<=totalCols;c++){
      // find if there's an element with these coordinates
      const num = Object.keys(positions).find(k=> positions[k].r===r && positions[k].c===c);
      const slot = document.createElement('div');
      slot.style.gridRow = r;
      slot.style.gridColumn = c;
      slot.className='element-slot';
      if(num && byNumber[num]){
        const el = byNumber[num];
        // apply search & filter checks
        const q = filterQuery.toLowerCase();
        const matchesQ = el.name.toLowerCase().includes(q) || el.symbol.toLowerCase().includes(q) || String(el.number)===q;
        const matchesC = !filterCat || (el.category && el.category.toLowerCase().includes(filterCat));
        if(matchesQ && matchesC){
          const box = document.createElement('div');
          box.className = 'element '+catClass(el.category);
          box.innerHTML = `<strong>${el.symbol}</strong><span>${el.number}</span>`;
          box.onclick = ()=> showDetail(el);
          slot.appendChild(box);
        } else {
          // leave empty to respect search/filter
        }
      }
      table.appendChild(slot);
    }
  }
}

// show detail card
function showDetail(el){
  document.getElementById('detail-name').textContent = el.name;
  document.getElementById('detail-symbol').textContent = el.symbol;
  document.getElementById('detail-number').textContent = el.number;
  document.getElementById('detail-mass').textContent = el.mass;
  document.getElementById('detail-category').textContent = el.category;
  document.getElementById('detail-state').textContent = el.state;
  document.getElementById('detail-fun').textContent = el.fun || '';
  detailCard.hidden = false;
  detailCard.scrollIntoView({behavior:'smooth',block:'center'});
}

closeDetail.addEventListener('click', ()=> detailCard.hidden = true);

// search & filter handlers
searchBox.addEventListener('input', ()=> renderTable(searchBox.value, categoryFilter.value));
categoryFilter.addEventListener('change', ()=> renderTable(searchBox.value, categoryFilter.value));

// random element feature
randomBtn.addEventListener('click', ()=>{
  const idx = Math.floor(Math.random()*elements.length);
  const el = elements[idx];
  randName.textContent = el.name + ' ('+el.symbol+')';
  randFun.textContent = el.fun || '';
  randomCard.hidden = false;
});
randClose.addEventListener('click', ()=> randomCard.hidden = true);

// initial render
renderTable();
