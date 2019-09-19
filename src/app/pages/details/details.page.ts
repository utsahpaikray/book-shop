import { Component, OnInit, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


am4core.useTheme(am4themes_animated);



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  private chart: am4charts.XYChart;
public data = [
{
    country: 'Dummy',
    disabled: true,
    litres: 1000,
    color: am4core.color('#dadada'),
    opacity: 0.3,
    strokeDasharray: '4,4'
},
 {
    country: 'Lithuania',
    litres: 501.9
},
{
    country: 'Estonia',
    litres: 301.9
},
{
    country: 'Ireland',
    litres: 201.1
},
{
    country: 'Germany',
    litres: 165.8
},
{
    country: 'Australia',
    litres: 139.9
},
{
    country: 'Austria',
    litres: 128.3
}];

constructor(private zone: NgZone) {}


ngOnInit() {
  }
ngAfterViewInit() {
    // this.zone.runOutsideAngular(() => {
    //   // const chart = am4core.create('chartdiv', am4charts.XYChart);
    //   const chart = am4core.create('chartdiv', am4charts.GaugeChart);
    //   chart.innerRadius = am4core.percent(82);

    //   const axis = chart.xAxes.push(new am4charts.ValueAxis());
    //   axis.min = 0;
    //   axis.max = 100;
    //   axis.strictMinMax = true;
    //   axis.renderer.radius = am4core.percent(80);
    //   axis.renderer.inside = true;
    //   axis.renderer.line.strokeOpacity = 1;
    //   axis.renderer.ticks.template.strokeOpacity = 1;
    //   axis.renderer.ticks.template.length = 10;
    //   axis.renderer.grid.template.disabled = true;
    //   axis.renderer.labels.template.radius = 40;
    //   axis.renderer.labels.template.adapter.add('text', function(text) {
    //     return text + '%';
    //   });

    //   const colorSet = new am4core.ColorSet();

    //   const axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    //   axis2.min = 0;
    //   axis2.max = 100;
    //   axis2.renderer.innerRadius = 10;
    //   axis2.strictMinMax = true;
    //   axis2.renderer.labels.template.disabled = true;
    //   axis2.renderer.ticks.template.disabled = true;
    //   axis2.renderer.grid.template.disabled = true;

    //   const range0 = axis2.axisRanges.create();
    //   range0.value = 0;
    //   range0.endValue = 50;
    //   range0.axisFill.fillOpacity = 1;
    //   range0.axisFill.fill = colorSet.getIndex(0);

    //   const range1 = axis2.axisRanges.create();
    //   range1.value = 50;
    //   range1.endValue = 100;
    //   range1.axisFill.fillOpacity = 1;
    //   range1.axisFill.fill = colorSet.getIndex(2);

    //   const label = chart.radarContainer.createChild(am4core.Label);
    //   label.isMeasured = false;
    //   label.fontSize = 45;
    //   label.x = am4core.percent(50);
    //   label.y = am4core.percent(100);
    //   label.horizontalCenter = 'middle';
    //   label.verticalCenter = 'bottom';
    //   label.text = '50%';

    //   const hand = chart.hands.push(new am4charts.ClockHand());
    //   hand.axis = axis2;
    //   hand.innerRadius = am4core.percent(20);
    //   hand.startWidth = 10;
    //   hand.pin.disabled = true;
    //   hand.value = 50;

    //   hand.events.on('propertychanged', function(ev) {
    //     range0.endValue = ev.target.value;
    //     range1.value = ev.target.value;
    //     axis2.invalidate();
    //   });

    //   setInterval(function() {
    //     const value = Math.round(Math.random() * 100);
    //     label.text = value + '%';
    //     const animation = new am4core.Animation(hand, {
    //       property: 'value',
    //       to: value
    //     }, 1000, am4core.ease.cubicOut).start();
    //   }, 2000);
    //         // this.chart = chart;
    // });
  }
ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
