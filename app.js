const aircraft = [
  {
    model: 'A220-100', family: 'A220 FAMILY', category: 'Short-to-medium range · Single-aisle',
    length: 35.0, span: 35.1, height: 11.5, seats: '100–135', range: '3,600 nm', delivery: '2016',
    operators: ['Delta Air Lines', 'SWISS']
  },
  {
    model: 'A220-300', family: 'A220 FAMILY', category: 'Short-to-medium range · Single-aisle',
    length: 38.7, span: 35.1, height: 11.5, seats: '120–160', range: '3,400 nm', delivery: '2016',
    operators: ['airBaltic', 'Air Canada', 'Air France', 'Delta Air Lines', 'JetBlue', 'Korean Air', 'ITA Airways', 'Egyptair', 'Breeze Airways']
  },
  {
    model: 'A319ceo', family: 'A320 FAMILY', category: 'Short-to-medium range · Single-aisle',
    length: 33.84, span: 35.8, height: 11.76, seats: '120–150', range: '3,700 nm', delivery: '1996',
    operators: ['American Airlines', 'Lufthansa', 'easyJet', 'Air France', 'Delta Air Lines', 'United Airlines', 'Avianca', 'British Airways']
  },
  {
    model: 'A320ceo', family: 'A320 FAMILY', category: 'Short-to-medium range · Single-aisle',
    length: 37.57, span: 35.8, height: 11.76, seats: '150–180', range: '3,300 nm', delivery: '1988',
    operators: ['American Airlines', 'easyJet', 'Lufthansa', 'China Eastern', 'Vueling', 'IndiGo', 'United Airlines', 'Air France', 'ANA', 'Turkish Airlines']
  },
  {
    model: 'A321ceo', family: 'A320 FAMILY', category: 'Short-to-medium range · Single-aisle',
    length: 44.51, span: 35.8, height: 11.76, seats: '180–220', range: '3,200 nm', delivery: '1994',
    operators: ['American Airlines', 'Lufthansa', 'Wizz Air', 'Turkish Airlines', 'China Southern', 'Delta Air Lines', 'Air China', 'China Eastern', 'JetBlue', 'Spirit Airlines']
  },
  {
    model: 'A319neo', family: 'A320 FAMILY', category: 'Short-to-medium range · Single-aisle',
    length: 33.84, span: 35.8, height: 11.76, seats: '120–160', range: '3,750 nm', delivery: 'Not yet delivered',
    operators: []
  },
  {
    model: 'A320neo', family: 'A320 FAMILY', category: 'Short-to-medium range · Single-aisle',
    length: 37.57, span: 35.8, height: 11.76, seats: '150–180', range: '3,400 nm', delivery: '2016',
    operators: ['IndiGo', 'Lufthansa', 'Wizz Air', 'China Eastern', 'Air China', 'Volaris', 'Frontier Airlines', 'Pegasus Airlines', 'Air India', 'easyJet']
  },
  {
    model: 'A321neo', family: 'A320 FAMILY', category: 'Short-to-medium range · Single-aisle',
    length: 44.51, span: 35.8, height: 11.76, seats: '180–220', range: '4,000 nm', delivery: '2017',
    operators: ['IndiGo', 'Wizz Air', 'American Airlines', 'China Southern', 'Lufthansa', 'Volaris', 'Pegasus Airlines', 'AirAsia', 'Delta Air Lines', 'Turkish Airlines']
  },
  {
    model: 'A321XLR', family: 'A320 FAMILY', category: 'Long-range · Single-aisle',
    length: 44.51, span: 35.8, height: 11.76, seats: '180–220', range: '4,700 nm', delivery: '2024',
    operators: ['Iberia', 'Aer Lingus', 'Wizz Air', 'Qantas', 'American Airlines', 'United Airlines']
  },
  {
    model: 'A330-200', family: 'A330 FAMILY', category: 'Long-range · Widebody',
    length: 58.82, span: 60.3, height: 17.39, seats: '220–260', range: '7,250 nm', delivery: '1998',
    operators: ['Delta Air Lines', 'Air China', 'Turkish Airlines', 'Qatar Airways', 'Malaysia Airlines', 'Cebu Pacific', 'Etihad Airways']
  },
  {
    model: 'A330-300', family: 'A330 FAMILY', category: 'Medium-to-long range · Widebody',
    length: 63.66, span: 60.3, height: 16.79, seats: '260–300', range: '6,350 nm', delivery: '1994',
    operators: ['Delta Air Lines', 'Cathay Pacific', 'Turkish Airlines', 'China Southern', 'AirAsia X', 'Lufthansa', 'Korean Air', 'Qatar Airways', 'Cebu Pacific']
  },
  {
    model: 'A330-800', family: 'A330 FAMILY', category: 'Long-range · Widebody',
    length: 58.82, span: 64.0, height: 17.39, seats: '220–260', range: '8,150 nm', delivery: '2020',
    operators: ['Kuwait Airways', 'Uganda Airlines', 'Air Greenland']
  },
  {
    model: 'A330-900', family: 'A330 FAMILY', category: 'Long-range · Widebody',
    length: 63.66, span: 64.0, height: 16.79, seats: '260–300', range: '7,200 nm', delivery: '2018',
    operators: ['Delta Air Lines', 'Cebu Pacific', 'AirAsia X', 'Virgin Atlantic', 'Condor', 'ITA Airways', 'Malaysia Airlines', 'Garuda Indonesia', 'Air Transat', 'Starlux Airlines', 'TAP Air Portugal', 'Azul', 'Aircalin']
  },
  {
    model: 'A350-900', family: 'A350 FAMILY', category: 'Long-range · Widebody',
    length: 66.8, span: 64.75, height: 17.05, seats: '300–350', range: '8,100 nm', delivery: '2015',
    operators: ['Singapore Airlines', 'Qatar Airways', 'Cathay Pacific', 'Lufthansa', 'Air France', 'Delta Air Lines', 'Finnair', 'Ethiopian Airlines', 'Turkish Airlines', 'Japan Airlines']
  },
  {
    model: 'A350-1000', family: 'A350 FAMILY', category: 'Long-range · Widebody',
    length: 73.78, span: 64.75, height: 17.08, seats: '350–410', range: '8,700 nm', delivery: '2018',
    operators: ['Qatar Airways', 'Cathay Pacific', 'British Airways', 'Japan Airlines', 'Virgin Atlantic', 'Etihad Airways', 'Air Caraïbes', 'French bee']
  },
  {
    model: 'A380-800', family: 'A380 FAMILY', category: 'Long-range · Double-deck widebody',
    length: 72.72, span: 79.75, height: 24.09, seats: '525–555', range: '8,000 nm', delivery: '2007',
    operators: ['Emirates', 'Singapore Airlines', 'Lufthansa', 'British Airways', 'Qantas', 'Etihad Airways', 'Korean Air', 'Qatar Airways', 'Asiana Airlines']
  }
];

const select = document.querySelector('#aircraft-select');
const drawing = document.querySelector('#aircraft-drawing');
const measurementsToggle = document.querySelector('[data-setting="measurements"]');
const factsPanel = document.querySelector('#facts-panel');
const airlinesPanel = document.querySelector('#airlines-panel');

aircraft.forEach((plane) => {
  const option = document.createElement('option');
  option.value = plane.model;
  option.textContent = plane.model;
  select.append(option);
});

function formatDimension(value) {
  return Number.isInteger(value) ? value.toFixed(0) : value.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
}

function createDrawing(plane, index) {
  const x0 = 155;
  const centerY = 345;
  const scale = Math.min(650 / plane.length, 470 / plane.span);
  const length = plane.length * scale;
  const halfSpan = plane.span * scale / 2;
  const xNose = x0;
  const xTail = x0 + length;
  const yTop = centerY - halfSpan;
  const yBottom = centerY + halfSpan;
  const nose = x0 + length * 0.055;
  const tailBase = x0 + length * 0.91;
  const wingRootFront = x0 + length * 0.34;
  const wingRootBack = x0 + length * 0.58;
  const wingTipFront = x0 + length * 0.46;
  const wingTipBack = x0 + length * 0.73;
  const finX = x0 + length * 0.82;
  const finHalf = halfSpan * 0.36;
  const engines = 2;
  const engineY = halfSpan * 0.45;
  const engineX1 = x0 + length * 0.48;
  const engineX2 = x0 + length * 0.63;
  const dimensionY = Math.min(667, yBottom + 27);
  const spanDimensionX = Math.min(820, xTail + 25);

  const fuse = [
    `M ${nose} ${centerY}`,
    `Q ${x0 + length * 0.015} ${centerY - 5} ${x0 + length * 0.07} ${centerY - 7}`,
    `L ${tailBase} ${centerY - 6}`,
    `L ${xTail} ${centerY}`,
    `L ${tailBase} ${centerY + 6}`,
    `L ${x0 + length * 0.07} ${centerY + 7}`,
    `Q ${x0 + length * 0.015} ${centerY + 5} ${nose} ${centerY} Z`
  ].join(' ');

  const wing = [
    `M ${wingRootFront} ${centerY - 5}`,
    `L ${wingTipFront} ${yTop + 8}`,
    `Q ${wingTipFront + 3} ${yTop} ${wingTipFront + 11} ${yTop + 2}`,
    `L ${wingTipBack} ${yTop + 4}`,
    `L ${wingRootBack} ${centerY - 5}`,
    `L ${wingRootBack} ${centerY + 5}`,
    `L ${wingTipBack} ${yBottom - 4}`,
    `L ${wingTipFront + 11} ${yBottom - 2}`,
    `Q ${wingTipFront + 3} ${yBottom} ${wingTipFront} ${yBottom - 8}`,
    `L ${wingRootFront} ${centerY + 5} Z`
  ].join(' ');

  const tailplane = [
    `M ${x0 + length * 0.78} ${centerY - 4}`,
    `L ${finX} ${centerY - finHalf}`,
    `L ${finX + length * 0.075} ${centerY - finHalf + 2}`,
    `L ${tailBase} ${centerY - 4}`,
    `L ${tailBase} ${centerY + 4}`,
    `L ${finX + length * 0.075} ${centerY + finHalf - 2}`,
    `L ${finX} ${centerY + finHalf}`,
    `L ${x0 + length * 0.78} ${centerY + 4} Z`
  ].join(' ');

  const enginesMarkup = Array.from({ length: engines }, (_, engineIndex) => {
    const x = engines === 2 ? engineX1 : engineIndex % 2 === 0 ? engineX1 : engineX2;
    const y = engineIndex % 2 === 0 ? centerY - engineY : centerY + engineY;
    const width = Math.max(16, plane.length * 0.43);
    const height = Math.max(4.5, plane.length * 0.11);
    return `<ellipse class="engine" cx="${x}" cy="${y}" rx="${width}" ry="${height}"/><path class="detail-line" d="M ${x - width * .55} ${y} H ${x + width * .6}"/>`;
  }).join('');

  return `
    <defs>
      <marker id="arrow-${index}" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto-start-reverse" markerUnits="strokeWidth">
        <path d="M 0 0 L 7 3.5 L 0 7" fill="none" stroke="var(--blue-lines)" stroke-width="1"/>
      </marker>
    </defs>
    <g class="dimension-group">
      <path class="dimension-extension" d="M ${xNose} ${centerY + 12} V ${dimensionY + 2} M ${xTail} ${centerY + 12} V ${dimensionY + 2}"/>
      <path class="dimension-line" d="M ${xNose} ${dimensionY} H ${xTail}" marker-start="url(#arrow-${index})" marker-end="url(#arrow-${index})"/>
      <text class="dimension-label" x="${(xNose + xTail) / 2}" y="${dimensionY - 8}" text-anchor="middle">LENGTH  ${formatDimension(plane.length)} M</text>
      <path class="dimension-extension" d="M ${wingTipFront + 6} ${yTop} H ${spanDimensionX} M ${wingTipFront + 6} ${yBottom} H ${spanDimensionX}"/>
      <path class="dimension-line" d="M ${spanDimensionX} ${yTop} V ${yBottom}" marker-start="url(#arrow-${index})" marker-end="url(#arrow-${index})"/>
      <text class="dimension-label" x="${spanDimensionX - 9}" y="${centerY}" text-anchor="middle" transform="rotate(-90 ${spanDimensionX - 9} ${centerY})">WINGSPAN  ${formatDimension(plane.span)} M</text>
    </g>
    <path class="centerline detail-line" d="M ${x0 - 18} ${centerY} H ${xTail + 19}"/>
    <path class="airframe" d="${tailplane}"/>
    <path class="airframe" d="${wing}"/>
    ${enginesMarkup}
    <path class="airframe" d="${fuse}"/>
    <path class="detail-line" d="M ${x0 + length * .11} ${centerY - 3} H ${x0 + length * .78} M ${x0 + length * .11} ${centerY + 3} H ${x0 + length * .78}"/>
    <path class="detail-line" d="M ${x0 + length * .1} ${centerY - 5} V ${centerY + 5} M ${x0 + length * .13} ${centerY - 6} V ${centerY + 6}"/>
  `;
}

function renderAircraft() {
  const plane = aircraft.find((item) => item.model === select.value) || aircraft[0];
  const index = aircraft.indexOf(plane) + 1;
  document.querySelector('#family-pill').textContent = plane.family;
  document.querySelector('#aircraft-title').textContent = plane.model;
  document.querySelector('#aircraft-subtitle').textContent = plane.category;
  document.querySelector('#drawing-code').textContent = plane.model;
  document.querySelector('#figure-number').textContent = String(index).padStart(2, '0');
  drawing.setAttribute('aria-label', `Illustrative top-view schematic of the Airbus ${plane.model}`);
  drawing.innerHTML = createDrawing(plane, index);
  drawing.querySelector('.dimension-group').classList.toggle('hidden', measurementsToggle.getAttribute('aria-checked') !== 'true');

  document.querySelector('#dimension-grid').innerHTML = [
    ['Length', plane.length],
    ['Wingspan', plane.span],
    ['Height', plane.height]
  ].map(([label, value]) => `
    <div class="dimension-cell"><span class="dimension-value">${formatDimension(value)}<span class="dimension-unit">m</span></span><span class="dimension-label">${label}</span></div>
  `).join('');

  document.querySelector('#seats-value').textContent = `${plane.seats} seats`;
  document.querySelector('#range-value').textContent = plane.range;
  document.querySelector('#delivery-value').textContent = plane.delivery;

  document.querySelector('#operator-count').textContent = String(plane.operators.length).padStart(2, '0');
  const operatorList = document.querySelector('#operator-list');
  operatorList.innerHTML = plane.operators.length
    ? plane.operators.map((operator) => `<span class="operator-chip">${operator}</span>`).join('')
    : '<p class="no-operators">No in-service operators reported yet.</p>';

  const sourceLinks = {
    'A220 FAMILY': ['https://en.wikipedia.org/wiki/Airbus_A220', 'A220 public fleet reference'],
    'A320 FAMILY': ['https://en.wikipedia.org/wiki/List_of_Airbus_A320_family_operators', 'A320 family operator list'],
    'A330 FAMILY': ['https://en.wikipedia.org/wiki/List_of_Airbus_A330_operators', 'A330 operator list'],
    'A350 FAMILY': ['https://en.wikipedia.org/wiki/List_of_Airbus_A350_operators', 'A350 operator list'],
    'A380 FAMILY': ['https://en.wikipedia.org/wiki/List_of_Airbus_A380_operators', 'A380 operator list']
  };
  const [sourceUrl, sourceLabel] = sourceLinks[plane.family];
  document.querySelector('#operator-source-link').href = sourceUrl;
  document.querySelector('#operator-source-link').textContent = sourceLabel;
}

function setTheme(theme) {
  document.body.classList.toggle('light', theme === 'light');
  document.querySelectorAll('.theme-option').forEach((button) => {
    const selected = button.dataset.theme === theme;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  try {
    localStorage.setItem('airbus-atlas-theme', theme);
  } catch (error) {
    console.warn('Could not save appearance preference.', error);
  }
}

function setPanelVisibility(setting, visible) {
  if (setting === 'measurements') {
    drawing.querySelector('.dimension-group')?.classList.toggle('hidden', !visible);
    return;
  }
  const panel = setting === 'facts' ? factsPanel : airlinesPanel;
  panel.classList.toggle('hidden-panel', !visible);
}

select.addEventListener('change', renderAircraft);
document.querySelectorAll('.theme-option').forEach((button) => {
  button.addEventListener('click', () => setTheme(button.dataset.theme));
});
document.querySelectorAll('.toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const visible = button.getAttribute('aria-checked') !== 'true';
    button.setAttribute('aria-checked', String(visible));
    setPanelVisibility(button.dataset.setting, visible);
  });
});

try {
  const savedTheme = localStorage.getItem('airbus-atlas-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);
} catch (error) {
  console.warn('Could not read saved appearance preference.', error);
}

renderAircraft();
