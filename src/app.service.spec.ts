import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return {name: "lalala"}', () => {
    expect(service.findSample({test: 'test'})).toStrictEqual({name:'lalala', test:'test'});
  })

  it('should be 4', () => {
    expect(2+2).toEqual(4);
  })

  describe("findSample()", () => {
    it("should return 'Hello World!'", () => {
      const result = service.findSample({test: "test"});
      expect(result).toBeInstanceOf(null);
    })
  })
});