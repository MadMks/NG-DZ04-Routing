import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements
  OnChanges, OnInit, DoCheck, OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  @Input() name: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - успешно отработал');
  }

  ngOnInit(): void {
    console.log('ngOnInit - успешно отработал');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck - успешно отработал');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy - успешно отработал');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked - успешно отработал');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - успешно отработал');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked - успешно отработал');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - успешно отработал');
  }

}
