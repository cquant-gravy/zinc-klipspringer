import { NgModule } from '@angular/core';
import { SearchToolbarComponent } from './components/search-toolbar/search-toolbar.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    SearchToolbarComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [SearchToolbarComponent]
})
export class GravyNgMaterialComponentsModule { }
