import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxSnackbarComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { InventoryItemType } from '../models/inventory-item/inventory-item-type';
import { InventoryItemService } from '../services/inventory-item.service';

@Component({
  selector: 'app-magazzino',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxSnackbarComponent, FormsModule],
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.scss']
})
export class MagazzinoComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public reorderQuantity = 0;
  public supplierOrderNotes?: string;
  public value?: string;
  public value1?: string;
  public value2 = 0;
  public value3?: string;
  public value4?: string;
  public value5?: string;
  public inventoryItemInventoryItem: InventoryItemType[] = [];

  constructor(
    public inventoryItemService: InventoryItemService,
  ) {}


  ngOnInit() {
    this.inventoryItemService.getInventoryItem().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.inventoryItemInventoryItem = data;
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
