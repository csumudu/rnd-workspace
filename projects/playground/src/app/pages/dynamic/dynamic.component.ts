import { ComponentOneComponent } from './component-one/component-one.component';
import {
  AfterViewInit,
  Compiler,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Injector,
  NgModule,
  NgModuleRef,
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

  @ViewChild('hostTwo', { read: ViewContainerRef, static: true })
  hostTwo: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private compiler: Compiler,
    private m: NgModuleRef<any>
  ) {}

  ngOnInit(): void {
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(
      ComponentOneComponent
    );

    const d = this.host.createComponent(factory);
  }

  ngAfterViewInit(): void {}

  loadMe(): void {
    const template = '<span>generated on the fly: {{name}}</span>';

    const tmpCmp = Component({ template })(class {});
    const tmpModule = NgModule({ declarations: [tmpCmp] })(class {});

    this.compiler
      .compileModuleAndAllComponentsAsync(tmpModule)
      .then((factories) => {
        const f = factories.componentFactories[0];
        const cmpRef = f.create(this.injector, [], null, this.m);
        cmpRef.instance.name = 'dynamic';
        this.hostTwo.insert(cmpRef.hostView);
      });
  }
}
