/**
 * This is a POC for the CodeMirror Directive
 * We extend the behaviour of the textArea (same as the CodeMirror.js documentation recommendation)
 *
 * Usage example:
 *  <textarea appCodeMirrorDirective [content]="content" [config]="config" (userUpdated)="consoleLog($event)"></textarea>
 *
 *
 */

import {
  EventEmitter, Output, AfterViewInit, Directive, ElementRef, HostListener, Input,
  OnChanges, OnDestroy
} from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror.js';

@Directive({
  selector: '[appCodeMirrorDirective]'
})

export class CodeMirrorDirectiveDirective implements AfterViewInit, OnChanges, OnDestroy {
  private instance;
  @Input() config = {};
  @Input() content = '';
  @Output() userUpdated: EventEmitter<any> = new EventEmitter<any>();

  constructor(private elRef: ElementRef) {
  }

  ngOnChanges(change) {
    if (change.content && change.content.previousValue !== change.content.currentValue) {
      this.change(this.instance, change.content.currentValue);
    }
  }

  ngAfterViewInit() {
    // init Code mirror instance
    // check if element type is testarea
    this.instance = CodeMirror.fromTextArea(this.elRef.nativeElement, this.config);
    // Outpus declerations
    this.instance.setValue(this.content);
    this.instance.on('change', this.change);
    this.instance.on('blur', this.blur);
  }

  ngOnDestroy() {
    // un bind the methods
    this.instance.off('change', this.change);
    this.instance = null;
  }

  // change
  change = (instance, changeObj) => {
    if (!instance) {
      return;
    }
    this.userUpdated.emit(<any> {
      instance: instance,
      event: {payload: changeObj},
      value: instance.getValue()
    });
  }

  // blur
  blur = (instance, changeObj) => {
    if (instance.state.delayingBlurEvent) {
      return;
    }
    if (instance.state.focused) {
      /*CodeMirror.signal(instance, 'blur', instance, event);
      instance.state.focused = false;
      CodeMirror.rmClass(instance.display.wrapper, 'CodeMirror-focused');*/
      this.elRef.nativeElement.blur();
    }
    this.userUpdated.emit(<any> {
      instance: this.instance,
      event: {payload: changeObj},
      value: this.instance.getValue()
    });
  }

  onDestroy() {
    console.log('onDestroy');
  }
}

