import { Component, OnInit } from '@angular/core';
import { Service } from '../service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [Service],
})
export class MainPageComponent implements OnInit {
  myControl = new FormControl();

  result;
  location: any;

  countryForm: FormGroup;
  displayInfo: boolean;
  error: boolean;
  filteredOptions: Observable<string[]>;
  options = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Botswana",
    "Brazil",
    "Bulgaria",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Ecuador",
    "Egypt",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Romania",
    "Russian",
    "Rwanda",
    "Samoa",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "South Sudan",
    "Spain",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "UK",
    "USA",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "VietNam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  constructor(private formBuilder: FormBuilder, private service: Service) {
    this.countryForm = this.formBuilder.group({
      country: ['', Validators.max(100)],
    });
  }

  ngOnInit(): void {
    this.displayInfo = false;
    this.service.getLocation().subscribe(
      (val) => {
        this.location = val;
        console.log("🚀 ~ file: main-page.component.ts ~ line 212 ~ MainPageComponent ~ ngOnInit ~ this.location", this.location)
        this.onLoad(this.location.country.name);
      },
      (err) => {
        console.log(err);
      }
    );
    // this.filteredOptions = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
  }
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  onLoad(country: string) {
    console.log('here:' + this.location);
    this.service.getCorona(country).subscribe(
      (da) => {
        this.result = da;
        console.log("🚀 ~ file: main-page.component.ts ~ line 236 ~ MainPageComponent ~ onLoad ~ da", da)
        
      },
      (error) => console.log(error),
    );
  }

  onSubmit() {
    let country = Object.values(this.countryForm.value);
    console.log(this.countryForm.value);
    let c: any = country[0];
    console.log(c);
    this.service.getCorona(c).subscribe(
      (da) => (this.result = da),
      (error) => console.log(error),
      () => console.log('complete')
    );
    this.countryForm.reset();
  }
}

// $('.timer').each(function () {
//   var $this = $(this);
//   var val = $(this).data('count');
//   jQuery({
//       Counter: 0
//   }).animate({
//       Counter: val
//   }, {
//       duration: 500,
//       easing: 'swing',
//       step: function () {
//           $this.text(Math.ceil(this.Counter));
//       }
//   });
// });
