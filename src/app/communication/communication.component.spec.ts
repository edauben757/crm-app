import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxListModule, IgxAvatarModule } from '@infragistics/igniteui-angular';
import { CommunicationAppComponent } from './communication.component';

describe('ConnectAppComponent', () => {
  let component: CommunicationAppComponent;
  let fixture: ComponentFixture<CommunicationAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationAppComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxListModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
