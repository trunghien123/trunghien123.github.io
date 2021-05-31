import { WeatherService } from './../../services/weather.service';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  darkLogo: boolean = false;
  name1: string = '';
  name2: string = '';
  name3: string = '';
  temp1: number | undefined;
  temp2: number | undefined;
  temp3: number | undefined;
  minTemp1: number | undefined;
  minTemp2: number | undefined;
  minTemp3: number | undefined;
  maxTemp1: number | undefined;
  maxTemp2: number | undefined;
  maxTemp3: number | undefined;
  weatherMain1: string = '';
  weatherMain2: string = '';
  weatherMain3: string = '';
  data1:any = {
    q : 'saigon',
    appid : '37665091eb00d3291b052e9daf04f7be'
  }
  data2:any = {
    q : 'magadan',
    appid : '37665091eb00d3291b052e9daf04f7be'
  }
  data3:any = {
    q : 'hanoi',
    appid : '37665091eb00d3291b052e9daf04f7be'
  }
  @ViewChild('isDark') isDark?: ElementRef;
  constructor(
    private weather: WeatherService,
    @Inject(DOCUMENT) private readonly doc : Document
  ) { }

  ngOnInit(): void {
    this.getTemp1(this.data1);
    this.getTemp2(this.data2);
    this.getTemp3(this.data3);
  }
  getTemp1(data1: any): void{
    this.weather.getTemp(this.data1).subscribe(
      (res:any) => {
        this.name1 = res.name;
        this.temp1 = Math.round(res.main.temp - 273.15);
        this.minTemp1 = Math.round(res.main.temp_min - 273.15);
        this.maxTemp1 = Math.round(res.main.temp_max - 273.15);
        this.weatherMain1 = res.weather[0].main;
      }, err => {alert(err)}
    )
  }
  getTemp2(data2: any): void{
    this.weather.getTemp(this.data2).subscribe(
      (res:any) => {
        this.name2 = res.name;
        this.temp2 = Math.round(res.main.temp - 273.15);
        this.minTemp2 = Math.round(res.main.temp_min - 273.15);
        this.maxTemp2 = Math.round(res.main.temp_max - 273.15);
        this.weatherMain2 = res.weather[0].main;
      }, err => {alert(err)}
    )
  }
  getTemp3(data3: any): void{
    this.weather.getTemp(this.data3).subscribe(
      (res:any) => {
        this.name3 = res.name;
        this.temp3 = Math.round(res.main.temp - 273.15);
        this.minTemp3 = Math.round(res.main.temp_min - 273.15);
        this.maxTemp3 = Math.round(res.main.temp_max - 273.15);
        this.weatherMain3 = res.weather[0].main;
      }, err => {alert(err)}
    )
  }
  onChange(toggleChange: any){
    this.isDark?.nativeElement.classList.toggle('dark');
    if(toggleChange.target.checked){
      this.darkLogo = true;
    } else {
      this.darkLogo = false;
    }
  }
}
