import {Component} from '@angular/core';
import 'codemirror/mode/go/go';

@Component({
  selector: 'app-root',
  template: `
    <h1>Codemirror sample with Angular 2</h1>
    <textarea appCodeMirrorDirective [content]="content" [config]="config" (userUpdated)="consoleLog($event)"></textarea>
  `,
})

export class AppComponent {
  hasChild = true;
  config;
  content;
  constructor() {
    this.config = {lineNumbers: true, mode: 'text/x-go' };
    this.content = `// ... some code !
package main

import "fmt"

// Send the sequence 2, 3, 4, ... to channel 'ch'.
func generate(ch chan<- int) {
	for i := 2; ; i++ {
		ch <- i  // Send 'i' to channel 'ch'
	}
}`;

  }

 consoleLog(event) {
    console.log(event);
 }
}
