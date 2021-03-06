import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechListComponent } from './tech-list.component';
import { HttpClient } from '@angular/common/http';
import { TechListService } from 'src/app/service/tech-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchPipe, CountPipe } from 'src/app/pipe/search.pipe';

describe('TechListComponent', () => {
  let component: TechListComponent;
  let fixture: ComponentFixture<TechListComponent>;
  let httpClient: HttpClient;
  let techService: TechListService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechListComponent, SearchPipe, CountPipe],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: TechListService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.inject(HttpClient);
    techService = TestBed.inject(TechListService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
