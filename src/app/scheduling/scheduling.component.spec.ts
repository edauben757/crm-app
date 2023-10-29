import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxListModule, IgxAvatarModule } from '@infragistics/igniteui-angular';
import { SchedulingAppComponent } from './scheduling.component';

describe('ConnectAppComponent', () => {
  let component: SchedulingAppComponent;
  let fixture: ComponentFixture<SchedulingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingAppComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxListModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
