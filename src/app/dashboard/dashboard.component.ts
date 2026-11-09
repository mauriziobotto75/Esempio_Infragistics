import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxSnackbarComponent, IgxSwitchComponent } from 'igniteui-angular';
import { IgcGridLite } from 'igniteui-grid-lite';
import { defineComponents } from 'igniteui-webcomponents';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexMarkers, ApexPlotOptions, ApexTheme, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { KpiSummaryType } from '../models/kpi-summary/kpi-summary-type';
import { RecentActivityType } from '../models/recent-activity-datasource/recent-activity-type';
import { KpiSummaryService } from '../services/kpi-summary.service';
import { RecentActivityDatasourceService } from '../services/recent-activity-datasource.service';

defineComponents(IgcGridLite);

@Component({
  selector: 'app-dashboard',
  imports: [IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, IgxBadgeComponent, IgxSwitchComponent, IgxSnackbarComponent, ChartComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  private _kpiSummary: KpiSummaryType[] = [];
  public get kpiSummary(): KpiSummaryType[] {
    return this._kpiSummary;
  }
  public set kpiSummary(value: KpiSummaryType[]) {
    this._kpiSummary = value;
    this.series = this.getSeries();
  }
  public series: ApexAxisChartSeries = this.getSeries();
  public colors: string[] = [
    '#1E3A5F',
    '#0D766E',
    '#0369A1',
    '#15803D',
    '#B45309'
  ];
  public chart: ApexChart = {
    type: 'bar',
    background: 'var(--ig-surface-50)',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    fontFamily: 'var(--ig-font-family)',
    height: '100%'
  };
  public plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true
    }
  };
  public title: ApexTitleSubtitle = {
    text: 'Fatturato Effettivo vs Target Obiettivo (€)'
  };
  public xaxis: ApexXAxis = {
    title: {
      text: 'Divisione / Canale Vendita'
    }
  };
  public yaxis: ApexYAxis = {
    title: {
      text: 'Importo Consolidato (€)'
    }
  };
  public theme: ApexTheme = {
    mode: 'light'
  };
  public legend: ApexLegend = {
    show: true
  };
  public markers: ApexMarkers = {
    size: 6
  };
  public dataLabels: ApexDataLabels = {
    enabled: false
  };
  public value = 15;
  public value1 = 50000;
  public value2 = 10;
  public value3 = '1';
  public checked = true;
  public checked1 = true;
  public recentActivityDatasourceRecentActivity: RecentActivityType[] = [];

  constructor(
    public kpiSummaryService: KpiSummaryService,
    public recentActivityDatasourceService: RecentActivityDatasourceService,
  ) {}


  ngOnInit() {
    this.kpiSummaryService.getKpiSummary().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.kpiSummary = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.recentActivityDatasourceService.getRecentActivity().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.recentActivityDatasourceRecentActivity = data;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getSeries(): ApexAxisChartSeries {
    return [
      {
        name: 'currentValue',
        data: this.kpiSummary,
        parsing: {
          x: 'metricName',
          y: [
            'currentValue'
          ]
        }
      },
      {
        name: 'targetValue',
        data: this.kpiSummary,
        parsing: {
          x: 'metricName',
          y: [
            'targetValue'
          ]
        }
      }
    ];
  }

  public stringToNumber(value: string): number {
    return parseFloat(value);
  }
}
