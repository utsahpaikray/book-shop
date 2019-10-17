import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-rent-services',
  templateUrl: './car-rent-services.page.html',
  styleUrls: ['./car-rent-services.page.scss'],
})
export class CarRentServicesPage implements OnInit {

  constructor() { }
public carlist= [
  {
  MakeId: 440,
  MakeName: "Aston Martin",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://auto.ndtvimg.com/car-images/colors/kia/seltos/kia-seltos-intelligency-blue.png",
  price:10,
  stand:'Balugaon'
 
  },
  {
  MakeId: 441,
  MakeName: "Tesla",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://auto.ndtvimg.com/car-images/big/kia/seltos/kia-seltos.jpg?v=18",
  price:10,
  stand:'Balugaon'
  },
  {
  MakeId: 442,
  MakeName: "Jaguar",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://media.zigcdn.com/media/content/2018/Dec/nexon-2_720x540.jpg",
  price:9,
  stand:'Balugaon'
  },
  {
  MakeId: 443,
  MakeName: "Maserati",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://smedia2.intoday.in/btmt/images/stories/kona_660x450_052819014729.jpg",
  price:8.5,
  stand:'Balugaon'
  },
  {
  MakeId: 445,
  MakeName: "Rolls Royce",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://cdn1.droom.in//images/news_images/2019-08-08/4df5b7e6d32706bfe23df9543247b289.jpg",
  price:9.25,
  stand:'Balugaon'
  },
  {
  MakeId: 448,
  MakeName: "Toyota",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:'https://cdn.motor1.com/images/mgl/4VnvA/s1/all-new-2018-hyundai-kona.jpg',
  price:8.50,
  stand:'Balugaon'
  },
  {
  MakeId: 449,
  MakeName: "Mercedes-Benz",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:'https://www.telematicswire.net/wp-content/uploads/2018/01/Kona-electric_Suv-telamaticswire.png',
  price:8.10,
  stand:'Balugaon'
  },
  {
  MakeId: 452,
  MakeName: "BMW",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://cdn1.droom.in//images/news_images/2019-08-08/4df5b7e6d32706bfe23df9543247b289.jpg",
  price:8,
  stand:'Balugaon'
  },
  {
  MakeId: 456,
  MakeName: "MINI",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://smedia2.intoday.in/btmt/images/stories/kona_660x450_052819014729.jpg",
  price:8.80,
  stand:'Balugaon'
  },
  {
  MakeId: 465,
  MakeName: "Mercury",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://cdn1.droom.in//images/news_images/2019-08-08/4df5b7e6d32706bfe23df9543247b289.jpg",
  price:9.10,
  stand:'Balugaon'
  },
  {
  MakeId: 466,
  MakeName: "Lotus",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://auto.ndtvimg.com/car-images/colors/kia/seltos/kia-seltos-intelligency-blue.png",
  price:8,
  stand:'Balugaon'
  },
  {
  MakeId: 467,
  MakeName: "Chevrolet",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://smedia2.intoday.in/btmt/images/stories/kona_660x450_052819014729.jpg",
  price:8,
  stand:'Balugaon'
  },
  {
  MakeId: 468,
  MakeName: "Buick",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://auto.ndtvimg.com/car-images/colors/kia/seltos/kia-seltos-intelligency-blue.png",
  price:8,
  stand:'Balugaon'
  },
  {
  MakeId: 469,
  MakeName: "Cadillac",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://cdn1.droom.in//images/news_images/2019-08-08/4df5b7e6d32706bfe23df9543247b289.jpg",
  price:8,
  stand:'Balugaon'
  },
  {
  MakeId: 470,
  MakeName: "Holden",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://smedia2.intoday.in/btmt/images/stories/kona_660x450_052819014729.jpg",
  price:8,
  stand:'Balugaon'
  },
  {
  MakeId: 472,
  MakeName: "GMC",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://cdn1.droom.in//images/news_images/2019-08-08/4df5b7e6d32706bfe23df9543247b289.jpg",
  price:8,
  stand:'Balugaon'
  },
  {
  MakeId: 476,
  MakeName: "Dodge",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://cdn1.droom.in//images/news_images/2019-08-08/4df5b7e6d32706bfe23df9543247b289.jpg",
  price:7.5,
  stand:'Balugaon'
  },
  {
  MakeId: 477,
  MakeName: "Chrysler",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://auto.ndtvimg.com/car-images/colors/kia/seltos/kia-seltos-intelligency-blue.png",
  price:10,
  stand:'Balugaon'
  },
  {
  MakeId: 481,
  MakeName: "Mitsubishi",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://auto.ndtvimg.com/car-images/colors/kia/seltos/kia-seltos-intelligency-blue.png",
  price:7,
  stand:'Balugaon'
  },
  {
  MakeId: 493,
  MakeName: "Alfa Romeo",
  VehicleTypeId: 2,
  VehicleTypeName: "Passenger Car",
  carImage:"https://auto.ndtvimg.com/car-images/colors/kia/seltos/kia-seltos-intelligency-blue.png",
  price:9,
  stand:'Balugaon'
  }
]
  ngOnInit() {
  }

}
