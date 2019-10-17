import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
export interface PeriodicElement {
  ProductName: string;
  quantity: number;
  Price: number;
  ISBN: string;
  description: string;
  image:string
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    quantity: 1,
    ProductName: 'Science Book',
    Price: 1.0079,
    ISBN: 'ISBN-12458',
    "image": "https://itbook.store/img/books/9780764598753.png",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic Price of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    quantity: 2,
    ProductName: 'History Book',
    Price: 4.0026,
    ISBN: 'ISBN-12458',
    "image": "https://itbook.store/img/books/9780764598753.png",
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, 
  {
    quantity: 3,
    ProductName: 'English Book',
    Price: 6.941,
    ISBN: 'ISBN-12458',
    "image": "https://itbook.store/img/books/9780764598753.png",
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    quantity: 4,
    ProductName: 'Geogrpahy Book',
    Price: 9.0122,
    ISBN: 'ISBN-12458',
    "image": "https://itbook.store/img/books/9780764598753.png",
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    quantity: 5,
    ProductName: 'Hindi',
    Price: 10.811,
    ISBN: 'ISBN-12458',
    "image": "https://itbook.store/img/books/9780764598753.png",
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    quantity: 6,
    ProductName: 'Sanskrit Book',
    Price: 12.0107,
    ISBN: 'ISBN-12458',
    "image": "https://itbook.store/img/books/9781119002819.png",
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    quantity: 7,
    ProductName: 'Social science Book',
    Price: 14.0067,
    ISBN: 'ISBN-12458',
    "image": "https://itbook.store/img/books/9781118026694.png",
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    quantity: 8,
    ProductName: 'Odia Book',
    Price: 15.9994,
    ISBN: 'ISBN-12458',
    "image": "https://itbook.store/img/books/9780764598753.png",
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    quantity: 9,
   ProductName: 'Music Book',
    Price: 18.9984,
    ISBN: 'ISBN-12458',
    image: "https://itbook.store/img/books/9780980285826.png",
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    quantity: 10,
    ProductName: 'Sports Book',
    Price: 20.1797,
    ISBN: 'ISBN-12458',
    image: "https://itbook.store/img/books/9780764579080.png",
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
    
  },
];
const books=[
  {
    "title": "Professional JavaScript for Web Developers",
    "subtitle": "",
    "isbn13": "9780764579080",
    "price": "$3.99",
    "image": "https://itbook.store/img/books/9780764579080.png",
    "url": "https://itbook.store/books/9780764579080"
  },
  {
    "title": "PCs For Dummies Quick Reference, 3rd Edition",
    "subtitle": "",
    "isbn13": "9780764598753",
    "price": "$0.00",
    "image": "https://itbook.store/img/books/9780764598753.png",
    "url": "https://itbook.store/books/9780764598753"
  },
  {
    "title": "Jump Start HTML5",
    "subtitle": "Get up to speed with HTML5 in a weekend",
    "isbn13": "9780980285826",
    "price": "$8.84",
    "image": "https://itbook.store/img/books/9780980285826.png",
    "url": "https://itbook.store/books/9780980285826"
  },
  {
    "title": "Professional JavaScript for Web Developers, 3rd Edition",
    "subtitle": "",
    "isbn13": "9781118026694",
    "price": "$27.07",
    "image": "https://itbook.store/img/books/9781118026694.png",
    "url": "https://itbook.store/books/9781118026694"
  },
  {
    "title": "Cyber Security Policy Guidebook",
    "subtitle": "",
    "isbn13": "9781118027806",
    "price": "$79.99",
    "image": "https://itbook.store/img/books/9781118027806.png",
    "url": "https://itbook.store/books/9781118027806"
  },
  {
    "title": "Getting an Information Security Job For Dummies",
    "subtitle": "",
    "isbn13": "9781119002819",
    "price": "$19.74",
    "image": "https://itbook.store/img/books/9781119002819.png",
    "url": "https://itbook.store/books/9781119002819"
  },
  {
    "title": "Artificial Intelligence For Dummies",
    "subtitle": "Step into the future with AI",
    "isbn13": "9781119467656",
    "price": "$13.17",
    "image": "https://itbook.store/img/books/9781119467656.png",
    "url": "https://itbook.store/books/9781119467656"
  },
  {
    "title": "Virtual & Augmented Reality For Dummies",
    "subtitle": "An easy-to-understand primer on Virtual Reality and Augmented Reality",
    "isbn13": "9781119481348",
    "price": "$18.32",
    "image": "https://itbook.store/img/books/9781119481348.png",
    "url": "https://itbook.store/books/9781119481348"
  },
  {
    "title": "Beginning Rails 3",
    "subtitle": "",
    "isbn13": "9781430224334",
    "price": "$7.27",
    "image": "https://itbook.store/img/books/9781430224334.png",
    "url": "https://itbook.store/books/9781430224334"
  },
  {
    "title": "The Game Maker's Companion",
    "subtitle": "",
    "isbn13": "9781430228264",
    "price": "$5.85",
    "image": "https://itbook.store/img/books/9781430228264.png",
    "url": "https://itbook.store/books/9781430228264"
  }
]
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class InventoryPage implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['ProductName', 'Price', 'ISBN', 'quantity'];
  expandedElement: PeriodicElement | null;
  constructor() { }

  ngOnInit() {
  }

}





