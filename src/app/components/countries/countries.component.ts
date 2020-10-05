import { Component, OnInit ,ViewChild ,AfterViewInit} from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from '../../model/global-data';
import { DateWiseData } from '../../model/date-wise-data';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { report } from 'process';
import { Data } from '@angular/router';




@Component({
  selector: 'app-countries',
  styleUrls: ['./countries.component.css'],
  templateUrl: './countries.component.html',
})



export class CountriesComponent implements OnInit ,AfterViewInit{
  
  
  ELEMENT_DATA : DateWiseData[] = []; 
  displayedColumns: string[] = ['date', 'cases'];
  dataSource = new MatTableDataSource<DateWiseData>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  data : GlobalDataSummary[];
  countries : string[] = [];
  datatable = [];  
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  
  selectedCountryData : DateWiseData[]; 
  dateWiseData ;
  loading = true;
  
  chart  = {
    PieChart : "PieChart" ,
    ColumnChart : 'ColumnChart' ,
    LineChart : "LineChart", 
    Columns : ['Dates', 'Cases'],
    height: 500,
    options: {
      animation:{
        duration: 200,
        easing: 'out',
      },
      is3D: true
    }  
  }
  DataServiceService: any;
   
  constructor(private service : DataServiceService) { }


  ngOnInit(): void {


    merge(
      this.service.getDateWiseData().pipe(
        map(result=>{
          this.dateWiseData = result;
        })
      ), 
      this.service.getGlobalData().pipe(map(result=>{
        this.data = result;
        this.data.forEach(cs=>{
          this.countries.push(cs.country)
        })
      }))
    ).subscribe(
      {
        complete : ()=>{
         this.updateValues('Afghanistan')
         this.loading = false;
        }
      }
    )

    
    //this.countriesDataTable();

  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  updateChart(){
    this.datatable = [];
     console.log(this.datatable);    
     //this.datatable.push(["Date" , 'Cases'])
     this.selectedCountryData.forEach(cs=>{   
     this.datatable.push([cs.date , cs.cases])
      // console.log(this.datatable);  
    })  
  }

  updateValues(country : string){
    console.log(country);
    this.data.forEach(cs=>{
      if(cs.country == country){
        this.totalActive = cs.active
        this.totalDeaths = cs.deaths
        this.totalRecovered = cs.recovered
        this.totalConfirmed = cs.confirmed
      }
    })

    this.selectedCountryData  = this.dateWiseData[country]
    // console.log(this.selectedCountryData);
    this.updateChart();
    this.countriesDataTable();
  }

  countriesDataTable(){
    let result = this.service.getDateWiseData();
    console.log(result);
    result.subscribe(res=>{
      //console.log(res);
      this.dataSource.data = res as DateWiseData[];
      console.log(res);
      
    })    
  }

}
