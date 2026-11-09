import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IgxButtonDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxBadgeComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxCheckboxComponent, IgxSnackbarComponent } from 'igniteui-angular';
import { ClientiComponent } from './clienti.component';

describe('ClientiComponent', () => {
  let component: ClientiComponent;
  let fixture: ComponentFixture<ClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientiComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxButtonDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxBadgeComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxCheckboxComponent, IgxSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
