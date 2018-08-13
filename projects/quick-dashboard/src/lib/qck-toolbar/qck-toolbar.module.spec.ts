import { QckToolbarModule } from './qck-toolbar.module';

describe('QckToolbarModule', () => {
  let qckToolbarModule: QckToolbarModule;

  beforeEach(() => {
    qckToolbarModule = new QckToolbarModule();
  });

  it('should create an instance', () => {
    expect(qckToolbarModule).toBeTruthy();
  });
});
