import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Search } from 'angular-feather/icons';

@NgModule({
  imports: [
    FeatherModule.pick({
      Search
    })
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }