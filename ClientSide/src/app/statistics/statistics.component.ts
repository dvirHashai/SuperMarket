import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',

})
export class StatisticsComponent implements OnInit, AfterViewInit {



  public pieChartLabels:string[];
  public pieChartData:number[];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);

  }


  constructor(private authService: AuthService,) {

  }

  ngOnInit() {
    this.pieChartLabels = ['1','2'];
    this.pieChartData = [12,20];
    const path = 'products/statistics';
    console.log('in get statistics')

    this.authService.httpGet(path).subscribe(data => {
      if (data.success) {

        let i =0;
        console.log(data);
        for(i;i<data.callback.length;i++){
          this.pieChartLabels[i] = data.callback[i]._id.toString();
          this.pieChartData[i] = data.callback[i].count;
        }

        console.log(this.pieChartLabels);
        console.log(this.pieChartData);

      } else {
        console.log("im here!!")

      }
    });

  }

  ngAfterViewInit(){
    const path = 'products/statistics';
    console.log('in get statistics')

    this.authService.httpGet(path).subscribe(data => {
      if (data.success) {

        let i =0;
        console.log(data);
        for(i;i<data.callback.length;i++){
          this.pieChartLabels[i] = data.callback[i]._id;
          this.pieChartData[i] = data.callback[i].count;
        }

        console.log(this.pieChartLabels);
        console.log(this.pieChartData);

      } else {
        console.log("im here!!")




      }
    });
  }



  getStatistics() {

  }
}
