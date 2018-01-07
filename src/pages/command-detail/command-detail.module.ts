import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommandDetailPage } from './command-detail';

@NgModule({
  declarations: [
    CommandDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CommandDetailPage),
  ],
})
export class CommandDetailPageModule {}
