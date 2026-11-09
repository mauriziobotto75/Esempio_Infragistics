import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxSnackbarComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { SalesOrderType } from '../models/sales-order-datasource/sales-order-type';
import { SalesOrderDatasourceService } from '../services/sales-order-datasource.service';

@Component({
  selector: 'app-ordini',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxBadgeComponent, IgxSnackbarComponent, FormsModule],
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.scss']
})
export class OrdiniComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public transportDocumentNumber?: string;
  public dispatchDate?: Date;
  public value?: string;
  public value1 = 0;
  public value2 = 0;
  public salesOrderDatasourceSalesOrder: SalesOrderType[] = [];

  constructor(
    public salesOrderDatasourceService: SalesOrderDatasourceService,
  ) {}


  ngOnInit() {
    this.salesOrderDatasourceService.getSalesOrder().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.salesOrderDatasourceSalesOrder = data;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public stringToNumber(value: string): number {
    return parseFloat(value);
  }
}
