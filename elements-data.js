const elements = [
  {
    "number": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "mass": 1.008,
    "category": "nonmetal",
    "state": "gas",
    "fun": "Most abundant element in the universe; used in rockets and fuel cells."
  },
  {
    "number": 2,
    "symbol": "He",
    "name": "Helium",
    "mass": 4.0026,
    "category": "noble gas",
    "state": "gas",
    "fun": "Used in balloons, deep\u2011sea diving gas mixes, and cryogenics."
  },
  {
    "number": 3,
    "symbol": "Li",
    "name": "Lithium",
    "mass": 6.94,
    "category": "alkali metal",
    "state": "solid",
    "fun": "Key metal in rechargeable batteries (phones, EVs)."
  },
  {
    "number": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "mass": 9.0122,
    "category": "alkaline earth metal",
    "state": "solid",
    "fun": "Light, stiff metal used in aerospace and X\u2011ray windows."
  },
  {
    "number": 5,
    "symbol": "B",
    "name": "Boron",
    "mass": 10.81,
    "category": "metalloid",
    "state": "solid",
    "fun": "Used in borosilicate glass and detergents; important in agriculture."
  },
  {
    "number": 6,
    "symbol": "C",
    "name": "Carbon",
    "mass": 12.011,
    "category": "nonmetal",
    "state": "solid",
    "fun": "Basis of all known life; forms diamonds, graphite, and carbon nanotubes."
  },
  {
    "number": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "mass": 14.007,
    "category": "nonmetal",
    "state": "gas",
    "fun": "Makes up ~78% of Earth's atmosphere; used in fertilizers and cryogenics."
  },
  {
    "number": 8,
    "symbol": "O",
    "name": "Oxygen",
    "mass": 15.999,
    "category": "nonmetal",
    "state": "gas",
    "fun": "Essential for respiration and combustion; most abundant element in Earth's crust."
  },
  {
    "number": 9,
    "symbol": "F",
    "name": "Fluorine",
    "mass": 18.998,
    "category": "halogen",
    "state": "gas",
    "fun": "Highly reactive; used in toothpaste (fluoride) and in manufacturing Teflon."
  },
  {
    "number": 10,
    "symbol": "Ne",
    "name": "Neon",
    "mass": 20.18,
    "category": "noble gas",
    "state": "gas",
    "fun": "Used in colorful neon signs and gas\u2011discharge tubes."
  },
  {
    "number": 11,
    "symbol": "Na",
    "name": "Sodium",
    "mass": 22.99,
    "category": "alkali metal",
    "state": "solid",
    "fun": "Reactive metal; common in table salt (as NaCl) and industrial chemistry."
  },
  {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnesium",
    "mass": 24.305,
    "category": "alkaline earth metal",
    "state": "solid",
    "fun": "Light structural metal used in alloys and fireworks."
  },
  {
    "number": 13,
    "symbol": "Al",
    "name": "Aluminium",
    "mass": 26.982,
    "category": "post-transition metal",
    "state": "solid",
    "fun": "Light, corrosion\u2011resistant metal used worldwide in packaging and aircraft."
  },
  {
    "number": 14,
    "symbol": "Si",
    "name": "Silicon",
    "mass": 28.085,
    "category": "metalloid",
    "state": "solid",
    "fun": "Base of modern electronics (semiconductors) and major component of sand."
  },
  {
    "number": 15,
    "symbol": "P",
    "name": "Phosphorus",
    "mass": 30.974,
    "category": "nonmetal",
    "state": "solid",
    "fun": "Vital nutrient in DNA and fertilizers; exists in several allotropes."
  },
  {
    "number": 16,
    "symbol": "S",
    "name": "Sulfur",
    "mass": 32.06,
    "category": "nonmetal",
    "state": "solid",
    "fun": "Used to make sulfuric acid, vulcanize rubber, and in fertilizers."
  },
  {
    "number": 17,
    "symbol": "Cl",
    "name": "Chlorine",
    "mass": 35.45,
    "category": "halogen",
    "state": "gas",
    "fun": "Used to disinfect water and in many industrial chemicals."
  },
  {
    "number": 18,
    "symbol": "Ar",
    "name": "Argon",
    "mass": 39.948,
    "category": "noble gas",
    "state": "gas",
    "fun": "Inert gas used in welding and as a protective atmosphere for bulbs."
  },
  {
    "number": 19,
    "symbol": "K",
    "name": "Potassium",
    "mass": 39.098,
    "category": "alkali metal",
    "state": "solid",
    "fun": "Essential nutrient for plants and animals; used in fertilizers."
  },
  {
    "number": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "mass": 40.078,
    "category": "alkaline earth metal",
    "state": "solid",
    "fun": "Important in bones and teeth; used in cement and plaster."
  },
  {
    "number": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "mass": 44.956,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in aerospace alloys and high\u2011intensity lamps."
  },
  {
    "number": 22,
    "symbol": "Ti",
    "name": "Titanium",
    "mass": 47.867,
    "category": "transition metal",
    "state": "solid",
    "fun": "Strong, light, corrosion\u2011resistant metal used in implants and aircraft."
  },
  {
    "number": 23,
    "symbol": "V",
    "name": "Vanadium",
    "mass": 50.942,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used to strengthen steel and in some batteries."
  },
  {
    "number": 24,
    "symbol": "Cr",
    "name": "Chromium",
    "mass": 51.996,
    "category": "transition metal",
    "state": "solid",
    "fun": "Gives stainless steel its corrosion resistance and shine."
  },
  {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganese",
    "mass": 54.938,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in steelmaking and as an alloying agent."
  },
  {
    "number": 26,
    "symbol": "Fe",
    "name": "Iron",
    "mass": 55.845,
    "category": "transition metal",
    "state": "solid",
    "fun": "Core metal in steel; historically central to civilization."
  },
  {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "mass": 58.933,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in batteries, pigments, and superalloys."
  },
  {
    "number": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "mass": 58.693,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in coins, stainless steel, and rechargeable batteries."
  },
  {
    "number": 29,
    "symbol": "Cu",
    "name": "Copper",
    "mass": 63.546,
    "category": "transition metal",
    "state": "solid",
    "fun": "Excellent electrical conductor used in wiring and plumbing."
  },
  {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "mass": 65.38,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used to galvanize steel to prevent rust; essential trace nutrient."
  },
  {
    "number": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "mass": 69.723,
    "category": "post-transition metal",
    "state": "solid",
    "fun": "Melts near body temperature; used in semiconductors and LEDs."
  },
  {
    "number": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "mass": 72.63,
    "category": "metalloid",
    "state": "solid",
    "fun": "Early semiconductor material; used in infrared optics."
  },
  {
    "number": 33,
    "symbol": "As",
    "name": "Arsenic",
    "mass": 74.922,
    "category": "metalloid",
    "state": "solid",
    "fun": "Toxic element historically used as a pigment and poison; has industrial uses."
  },
  {
    "number": 34,
    "symbol": "Se",
    "name": "Selenium",
    "mass": 78.971,
    "category": "nonmetal",
    "state": "solid",
    "fun": "Used in electronics, glassmaking, and as a trace nutrient."
  },
  {
    "number": 35,
    "symbol": "Br",
    "name": "Bromine",
    "mass": 79.904,
    "category": "halogen",
    "state": "liquid",
    "fun": "A red\u2011brown liquid used in flame retardants and photography chemicals."
  },
  {
    "number": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "mass": 83.798,
    "category": "noble gas",
    "state": "gas",
    "fun": "Used in some types of lighting and photography."
  },
  {
    "number": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "mass": 85.468,
    "category": "alkali metal",
    "state": "solid",
    "fun": "Highly reactive metal used in research and atomic clocks."
  },
  {
    "number": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "mass": 87.62,
    "category": "alkaline earth metal",
    "state": "solid",
    "fun": "Used in fireworks for red color and in some ceramics."
  },
  {
    "number": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "mass": 88.906,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in LEDs, superconductors, and materials research."
  },
  {
    "number": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "mass": 91.224,
    "category": "transition metal",
    "state": "solid",
    "fun": "Corrosion\u2011resistant metal used in nuclear reactors and ceramics."
  },
  {
    "number": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "mass": 92.906,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in superconducting materials and steel alloys."
  },
  {
    "number": 42,
    "symbol": "Mo",
    "name": "Molybdenum",
    "mass": 95.95,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used to strengthen steel and in high\u2011temperature alloys."
  },
  {
    "number": 43,
    "symbol": "Tc",
    "name": "Technetium",
    "mass": 98,
    "category": "transition metal",
    "state": "solid",
    "fun": "First artificially produced element; used in medical imaging."
  },
  {
    "number": 44,
    "symbol": "Ru",
    "name": "Ruthenium",
    "mass": 101.07,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in electronics and as a catalyst."
  },
  {
    "number": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "mass": 102.91,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in catalytic converters and as a reflective plating."
  },
  {
    "number": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "mass": 106.42,
    "category": "transition metal",
    "state": "solid",
    "fun": "Important catalyst used in automotive catalytic converters."
  },
  {
    "number": 47,
    "symbol": "Ag",
    "name": "Silver",
    "mass": 107.87,
    "category": "transition metal",
    "state": "solid",
    "fun": "Best electrical conductor; used in jewelry, electronics, and photography."
  },
  {
    "number": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "mass": 112.41,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in batteries and pigments; toxic with prolonged exposure."
  },
  {
    "number": 49,
    "symbol": "In",
    "name": "Indium",
    "mass": 114.82,
    "category": "post-transition metal",
    "state": "solid",
    "fun": "Used in LCD screens (indium tin oxide) and low\u2011melting alloys."
  },
  {
    "number": 50,
    "symbol": "Sn",
    "name": "Tin",
    "mass": 118.71,
    "category": "post-transition metal",
    "state": "solid",
    "fun": "Used to coat other metals (tin cans) and in solder."
  },
  {
    "number": 51,
    "symbol": "Sb",
    "name": "Antimony",
    "mass": 121.76,
    "category": "metalloid",
    "state": "solid",
    "fun": "Used in flame retardants and alloys."
  },
  {
    "number": 52,
    "symbol": "Te",
    "name": "Tellurium",
    "mass": 127.6,
    "category": "metalloid",
    "state": "solid",
    "fun": "Used in alloys and as a semiconductor component."
  },
  {
    "number": 53,
    "symbol": "I",
    "name": "Iodine",
    "mass": 126.9,
    "category": "halogen",
    "state": "solid",
    "fun": "Essential nutrient; used as a disinfectant and in iodized salt."
  },
  {
    "number": 54,
    "symbol": "Xe",
    "name": "Xenon",
    "mass": 131.29,
    "category": "noble gas",
    "state": "gas",
    "fun": "Used in high\u2011intensity lamps and anesthetics in research."
  },
  {
    "number": 55,
    "symbol": "Cs",
    "name": "Caesium",
    "mass": 132.91,
    "category": "alkali metal",
    "state": "solid",
    "fun": "Used in atomic clocks and in oil\u2011well drilling fluids."
  },
  {
    "number": 56,
    "symbol": "Ba",
    "name": "Barium",
    "mass": 137.33,
    "category": "alkaline earth metal",
    "state": "solid",
    "fun": "Used in medical imaging (barium meals) and fireworks."
  },
  {
    "number": 57,
    "symbol": "La",
    "name": "Lanthanum",
    "mass": 138.91,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Used in camera lenses and specialty glass."
  },
  {
    "number": 58,
    "symbol": "Ce",
    "name": "Cerium",
    "mass": 140.12,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Used in catalytic converters and in glass polishing."
  },
  {
    "number": 59,
    "symbol": "Pr",
    "name": "Praseodymium",
    "mass": 140.91,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Used to make strong permanent magnets and in glass coloring."
  },
  {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodymium",
    "mass": 144.24,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Key element for powerful rare\u2011earth magnets in motors and headphones."
  },
  {
    "number": 61,
    "symbol": "Pm",
    "name": "Promethium",
    "mass": 145,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Rare radioactive element used in research and some luminous paints."
  },
  {
    "number": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "mass": 150.36,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Used in magnets and to treat certain cancers (radiotherapy research)."
  },
  {
    "number": 63,
    "symbol": "Eu",
    "name": "Europium",
    "mass": 151.96,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Important for red/blue phosphors in TVs and LEDs."
  },
  {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "mass": 157.25,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Used as a contrast agent in MRI and in magnets."
  },
  {
    "number": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "mass": 158.93,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Used in green phosphors and in solid\u2011state devices."
  },
  {
    "number": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "mass": 162.5,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Used in magnets and nuclear reactors for neutron absorption."
  },
  {
    "number": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "mass": 164.93,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Has the highest magnetic moment of any element; used in research."
  },
  {
    "number": 68,
    "symbol": "Er",
    "name": "Erbium",
    "mass": 167.26,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Used in fiber\u2011optic communications (amplifiers) and lasers."
  },
  {
    "number": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "mass": 168.93,
    "category": "lanthanide",
    "state": "solid",
    "fun": "One of the rarest lanthanides; used in portable X\u2011ray devices."
  },
  {
    "number": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "mass": 173.05,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Used in lasers and atomic clocks."
  },
  {
    "number": 71,
    "symbol": "Lu",
    "name": "Lutetium",
    "mass": 174.97,
    "category": "lanthanide",
    "state": "solid",
    "fun": "Heavy lanthanide used in PET scan detectors and catalysts."
  },
  {
    "number": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "mass": 178.49,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in control rods for nuclear reactors and high\u2011temp alloys."
  },
  {
    "number": 73,
    "symbol": "Ta",
    "name": "Tantalum",
    "mass": 180.95,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in capacitors, electronics, and surgical implants."
  },
  {
    "number": 74,
    "symbol": "W",
    "name": "Tungsten",
    "mass": 183.84,
    "category": "transition metal",
    "state": "solid",
    "fun": "Extremely high melting point; used in light bulb filaments and cutting tools."
  },
  {
    "number": 75,
    "symbol": "Re",
    "name": "Rhenium",
    "mass": 186.21,
    "category": "transition metal",
    "state": "solid",
    "fun": "Used in jet engine superalloys and catalysts."
  },
  {
    "number": 76,
    "symbol": "Os",
    "name": "Osmium",
    "mass": 190.23,
    "category": "transition metal",
    "state": "solid",
    "fun": "Very dense metal used in fountain\u2011pen tips and catalysts."
  },
  {
    "number": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "mass": 192.22,
    "category": "transition metal",
    "state": "solid",
    "fun": "Extremely corrosion\u2011resistant; used in spark plugs and high\u2011temp devices."
  },
  {
    "number": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "mass": 195.08,
    "category": "transition metal",
    "state": "solid",
    "fun": "Precious metal used in jewelry and catalytic converters."
  },
  {
    "number": 79,
    "symbol": "Au",
    "name": "Gold",
    "mass": 196.97,
    "category": "transition metal",
    "state": "solid",
    "fun": "Noble metal used for jewelry, electronics, and as a monetary standard."
  },
  {
    "number": 80,
    "symbol": "Hg",
    "name": "Mercury",
    "mass": 200.59,
    "category": "transition metal",
    "state": "liquid",
    "fun": "Only metal liquid at room temperature; used historically in thermometers (now limited due to toxicity)."
  },
  {
    "number": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "mass": 204.38,
    "category": "post-transition metal",
    "state": "solid",
    "fun": "Toxic element used historically in rat poisons and in electronics research."
  },
  {
    "number": 82,
    "symbol": "Pb",
    "name": "Lead",
    "mass": 207.2,
    "category": "post-transition metal",
    "state": "solid",
    "fun": "Heavy, toxic metal; used in batteries and historically in paints and pipes."
  },
  {
    "number": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "mass": 208.98,
    "category": "post-transition metal",
    "state": "solid",
    "fun": "Low\u2011toxicity replacement for lead in some applications; used in cosmetics and medicine."
  },
  {
    "number": 84,
    "symbol": "Po",
    "name": "Polonium",
    "mass": 209,
    "category": "metalloid",
    "state": "solid",
    "fun": "Highly radioactive; discovered by Marie Curie."
  },
  {
    "number": 85,
    "symbol": "At",
    "name": "Astatine",
    "mass": 210,
    "category": "halogen",
    "state": "solid",
    "fun": "Extremely rare and radioactive; little practical use outside research."
  },
  {
    "number": 86,
    "symbol": "Rn",
    "name": "Radon",
    "mass": 222,
    "category": "noble gas",
    "state": "gas",
    "fun": "Radioactive gas produced from uranium decay; can accumulate in basements."
  },
  {
    "number": 87,
    "symbol": "Fr",
    "name": "Francium",
    "mass": 223,
    "category": "alkali metal",
    "state": "solid",
    "fun": "Highly radioactive and extremely rare; mostly of research interest."
  },
  {
    "number": 88,
    "symbol": "Ra",
    "name": "Radium",
    "mass": 226,
    "category": "alkaline earth metal",
    "state": "solid",
    "fun": "Radioactive element historically used in luminous paint (now avoided)."
  },
  {
    "number": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "mass": 227,
    "category": "actinide",
    "state": "solid",
    "fun": "Radioactive; used in some radiation sources and research."
  },
  {
    "number": 90,
    "symbol": "Th",
    "name": "Thorium",
    "mass": 232.04,
    "category": "actinide",
    "state": "solid",
    "fun": "Fertile material considered for nuclear fuel cycles."
  },
  {
    "number": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "mass": 231.04,
    "category": "actinide",
    "state": "solid",
    "fun": "Rare and radioactive; mainly of scientific interest."
  },
  {
    "number": 92,
    "symbol": "U",
    "name": "Uranium",
    "mass": 238.03,
    "category": "actinide",
    "state": "solid",
    "fun": "Fuel for nuclear reactors and weapons; has important energy applications."
  },
  {
    "number": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "mass": 237,
    "category": "actinide",
    "state": "solid",
    "fun": "Radioactive actinide produced in reactors; used in research."
  },
  {
    "number": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "mass": 244,
    "category": "actinide",
    "state": "solid",
    "fun": "Radioactive element used in nuclear weapons and some reactor fuels."
  },
  {
    "number": 95,
    "symbol": "Am",
    "name": "Americium",
    "mass": 243,
    "category": "actinide",
    "state": "solid",
    "fun": "Used in smoke detectors (small sources) and industrial gauges."
  },
  {
    "number": 96,
    "symbol": "Cm",
    "name": "Curium",
    "mass": 247,
    "category": "actinide",
    "state": "solid",
    "fun": "Highly radioactive; used in research and as a heat source in space probes (experimental)."
  },
  {
    "number": 97,
    "symbol": "Bk",
    "name": "Berkelium",
    "mass": 247,
    "category": "actinide",
    "state": "solid",
    "fun": "Synthetic radioactive element produced in particle accelerators."
  },
  {
    "number": 98,
    "symbol": "Cf",
    "name": "Californium",
    "mass": 251,
    "category": "actinide",
    "state": "solid",
    "fun": "Used as a neutron source in industry and research."
  },
  {
    "number": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "mass": 252,
    "category": "actinide",
    "state": "solid",
    "fun": "Synthetic element discovered in nuclear tests; research use only."
  },
  {
    "number": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "mass": 257,
    "category": "actinide",
    "state": "solid",
    "fun": "Rare synthetic element used only in research."
  },
  {
    "number": 101,
    "symbol": "Md",
    "name": "Mendelevium",
    "mass": 258,
    "category": "actinide",
    "state": "solid",
    "fun": "Named after Mendeleev; synthetic and used only in research."
  },
  {
    "number": 102,
    "symbol": "No",
    "name": "Nobelium",
    "mass": 259,
    "category": "actinide",
    "state": "solid",
    "fun": "Synthetic element named after Nobel; research interest."
  },
  {
    "number": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "mass": 266,
    "category": "actinide",
    "state": "solid",
    "fun": "Synthetic transactinide element produced in labs."
  },
  {
    "number": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "mass": 267,
    "category": "transition metal",
    "state": "solid",
    "fun": "Synthetic element named for Ernest Rutherford; research use."
  },
  {
    "number": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "mass": 268,
    "category": "transition metal",
    "state": "solid",
    "fun": "Synthetic element produced in labs; named after Dubna, Russia."
  },
  {
    "number": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
    "mass": 269,
    "category": "transition metal",
    "state": "solid",
    "fun": "Named after Glenn Seaborg; synthetic and radioactive."
  },
  {
    "number": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "mass": 270,
    "category": "transition metal",
    "state": "solid",
    "fun": "Synthetic element produced in particle accelerators."
  },
  {
    "number": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "mass": 269,
    "category": "transition metal",
    "state": "solid",
    "fun": "Synthetic, short\u2011lived element discovered in Germany."
  },
  {
    "number": 109,
    "symbol": "Mt",
    "name": "Meitnerium",
    "mass": 278,
    "category": "transition metal",
    "state": "solid",
    "fun": "Named for Lise Meitner; extremely rare and synthetic."
  },
  {
    "number": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "mass": 281,
    "category": "transition metal",
    "state": "solid",
    "fun": "Synthetic element discovered in Darmstadt, Germany."
  },
  {
    "number": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "mass": 282,
    "category": "transition metal",
    "state": "solid",
    "fun": "Named after Roentgen; synthetic element with short half\u2011life."
  },
  {
    "number": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "mass": 285,
    "category": "transition metal",
    "state": "solid",
    "fun": "Named after Copernicus; synthetic and highly radioactive."
  },
  {
    "number": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "mass": 286,
    "category": "post-transition metal",
    "state": "solid",
    "fun": "Named after Japan (Nihon); synthetic and very rare."
  },
  {
    "number": 114,
    "symbol": "Fl",
    "name": "Flerovium",
    "mass": 289,
    "category": "post-transition metal",
    "state": "solid",
    "fun": "Synthetic element named after Flerov; research interest."
  },
  {
    "number": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "mass": 290,
    "category": "post-transition metal",
    "state": "solid",
    "fun": "Named after Moscow region; synthetic, short\u2011lived."
  },
  {
    "number": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "mass": 293,
    "category": "post-transition metal",
    "state": "solid",
    "fun": "Synthetic element named for Livermore lab; research only."
  },
  {
    "number": 117,
    "symbol": "Ts",
    "name": "Tennessine",
    "mass": 294,
    "category": "halogen",
    "state": "solid",
    "fun": "Named for Tennessee; synthetic and radioactive."
  },
  {
    "number": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "mass": 294,
    "category": "noble gas",
    "state": "solid",
    "fun": "Heaviest known element (synthetic); properties still under study."
  }
];