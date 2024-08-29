import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './preview.component';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [{ path: '', component: PreviewComponent }];

@NgModule({
  declarations: [PreviewComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule],
})
export class PreviewModule {}
