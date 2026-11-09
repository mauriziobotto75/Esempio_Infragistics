import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxCheckboxComponent, IgxIconComponent, IgxSnackbarComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CustomerType } from '../models/customer/customer-type';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-clienti',
  imports: [IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxBadgeComponent, IgxAvatarComponent, IgxCheckboxComponent, IgxSnackbarComponent, FormsModule],
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss']
})
export class ClientiComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public grantedCreditLimit = 0;
  public paymentTermsSelection = 'Ri.Ba. 30/60 gg d.f. f.m.';
  public value?: string;
  public value1?: string;
  public value2?: string;
  public value3 = 0;
  public checked = true;
  public customerCustomer: CustomerType[] = [];

  constructor(
    public customerService: CustomerService,
  ) {}


  ngOnInit() {
    this.customerService.getCustomer().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.customerCustomer = data;
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
