import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SaludoLocalComponent } from './saludo-local.component';
import { FormsModule } from '@angular/forms';

describe('SaludoLocalComponent', () => {
  let component: SaludoLocalComponent;
  let fixture: ComponentFixture<SaludoLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludoLocalComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
