import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CodemirrorModule } from 'ng2-codemirror';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CodeMirrorComponent } from './code-mirror/code-mirror.component';
import { CodeMirrorDirectiveDirective } from './code-mirror-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CodeMirrorComponent,
    CodeMirrorDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodemirrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
