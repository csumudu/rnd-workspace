import { ComponentOneComponent } from './component-one/component-one.component';
import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit, AfterViewInit {
  @ViewChild('host', { read: ViewContainerRef, static: true })
  host: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(
      ComponentOneComponent
    );

    const d = this.host.createComponent(factory);
  }

  ngAfterViewInit(): void {}
}
