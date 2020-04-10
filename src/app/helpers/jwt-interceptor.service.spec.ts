import { JwtInterceptorService } from '@auth0/angular-jwt';


import { TestBed } from '@angular/core/testing';



describe('JwtInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service:JwtInterceptorService = TestBed.get(JwtInterceptorService);
    expect(service).toBeTruthy();
  });
});
