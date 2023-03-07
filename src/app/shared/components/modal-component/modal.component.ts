import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { ModalComponentMap } from '../../models/modal-component.modal';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('modalContent', { read: ViewContainerRef, static: true })
  modalContent!: ViewContainerRef;

  component: any;
  
  @Input() componentName: string = '';
  @Input() display: boolean = false;
  @Input() entityId!: string;
  @Input() Header: string = 'Información'
  @Output() modalHide: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private factory: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadComponent();
  }

  showDialog(): void {
    this.display = true;
  }

  loadComponent(){

    if(this.display){

      const component = ModalComponentMap[this.componentName]
  
      const componentFactory = this.factory.resolveComponentFactory(component);
  
      this.modalContent.clear();
  
      this.component = this.modalContent.createComponent(componentFactory).instance;
  
      this.component.id = this.entityId;
      
    }
  }


  hideModal(): void {
    this.display = false;
    this.modalHide.emit(false);
  }

}
