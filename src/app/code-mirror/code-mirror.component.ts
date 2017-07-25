import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror.js';
// import { CodeMirror } from 'codemirror/mode/javascript/javascript.js';
@Component({
  selector: 'app-code-mirror',
  template: `<textarea #host></textarea>`,
  styleUrls: ['./code-mirror.component.css']
})
export class CodeMirrorComponent implements OnInit, AfterViewInit {
  private instance;
  @ViewChild('host') host;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // init Code mirror instance
    const config = {
      lineNumbers: true
    };
    this.instance = CodeMirror.fromTextArea(this.host.nativeElement, config);
  }

}
