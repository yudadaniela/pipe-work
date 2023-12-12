import { Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector:'[ui-directive]'

})
export class UiDirective{
    constructor(private element:ElementRef,
        private render:Renderer2){}

//  @HostListener('mouseEnter') onMouseEnter(){
//     this.changeColor('ligthred');
//  }
 @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse Leave');  // Para verificar si el evento se está llamando
    this.changeColor(null);
  }
 changeColor(color:string|null){
    this.render.setStyle(this.element.nativeElement, 'background-color', color)
 }
}