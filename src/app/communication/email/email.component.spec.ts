import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxNavigationDrawerModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxTabsModule, IgxListModule, IgxAvatarModule } from '@infragistics/igniteui-angular';
import { EmailComponent } from './email.component';

describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxNavigationDrawerModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxTabsModule, IgxListModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
