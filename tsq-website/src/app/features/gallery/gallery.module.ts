import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
@NgModule({ declarations:[GalleryComponent], imports:[SharedModule,GalleryRoutingModule] })
export class GalleryModule {}
