import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxListModule, IgxAvatarModule } from '@infragistics/igniteui-angular';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxListModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
