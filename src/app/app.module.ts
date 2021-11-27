import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CyroTaskComponent } from './cyro-task/cyro-task.component';
import { CyroHomeComponent } from './cyro-home/cyro-home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', component: CyroHomeComponent, pathMatch: 'full' },
      { path: 'tarefa', component: CyroTaskComponent },
    ]), ],
  declarations: [ AppComponent, HelloComponent, CyroHomeComponent, CyroTaskComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
