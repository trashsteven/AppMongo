import { NgModule } from '@angular/core';

import { AppMongoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [AppMongoSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [AppMongoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AppMongoSharedCommonModule {}
