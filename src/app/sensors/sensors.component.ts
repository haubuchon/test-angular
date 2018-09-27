import { Component, OnInit } from '@angular/core';
import { Sensor1Service } from '../sensor1.service'
import { Chart } from 'chart.js';
import { Observable, interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SensorData } from '../sensor-data';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})

export class SensorsComponent implements OnInit {

  public result;
  senslabels = [];
  senstemp = [];
  senshum = [];
  senslum = [];

  chart: Chart;
  sub: Subscription;
  source: Observable<SensorData>

  constructor(private data: Sensor1Service ) { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.senslabels,
        datasets: [
          { 
            data: this.senstemp,
            borderColor: "#3cba9f",
            fill: false,
            label: "Temp"
          },
          { 
            data: this.senshum,
            borderColor: "#3c009f",
            fill: false,
            label: "Hum"
          },
          { 
            data: this.senslum,
            borderColor: "#E1312f",
            fill: false,
            label: "Lum"
          },
        ]
      },
      options: {
        animation: false,
        bezierCurve: false,
        legend: {
          display: true,
          },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              autoSkip: false,
              maxRotation: 90,
              minRotation: 90
            }
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
    
    this.source = interval(5000)
      .pipe(
        switchMap(
          () => this.data.getSensorData()
        )
      );

      this.sub = this.source.subscribe(result => 
      {
        this.result = result.IOT_Sensor1s;
        this.senslabels = this.result.map(r => r.SampleTime.split(" ")[1]);
        this.senstemp = this.result.map(r => r.Temperature);
        this.senshum = this.result.map(r => r.Humidity);
        this.senslum = this.result.map(r => (4096 - r.Brightness) / 100);
        this.chart.data.labels = this.senslabels;
        this.chart.data.datasets =  [
          { 
            data: this.senstemp,
            borderColor: "#3cba9f",
            fill: false,
            label: "Temp"
          },
          { 
            data: this.senshum,
            borderColor: "#3c009f",
            fill: false,
            label: "Hum"
          },
          { 
            data: this.senslum,
            borderColor: "#E1312f",
            fill: false,
            label: "Lum"
          },
        ]
        this.chart.update();
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    
  }
}