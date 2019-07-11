import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppMongoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AppMongoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [AppMongoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppMongoSharedModule {
  static forRoot() {
    return {
      ngModule: AppMongoSharedModule
    };
  }
}
