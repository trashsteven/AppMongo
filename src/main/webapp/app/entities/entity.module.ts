import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'location',
        loadChildren: './location/location.module#AppMongoLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#AppMongoDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#AppMongoTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#AppMongoEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#AppMongoJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#AppMongoJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppMongoEntityModule {}
