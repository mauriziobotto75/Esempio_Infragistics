import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IgxButtonDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IgxBadgeComponent, IGX_GRID_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent } from 'igniteui-angular';
import { OrdiniComponent } from './ordini.component';

describe('OrdiniComponent', () => {
  let component: OrdiniComponent;
  let fixture: ComponentFixture<OrdiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdiniComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxButtonDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IgxBadgeComponent, IGX_GRID_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
