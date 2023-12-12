import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomDate'//se le pone su nombre 
})
export class RandomDatePipe implements PipeTransform {

  //implementa la interfaz pipeTransform y proporciona la implemetacion del
  //metodo transform
  transform( date:Date): Date {
    const startDate=new Date(2023,6,7);
    const endDate= new Date()
    const randomTime=startDate.getTime()+Math.random()
    *(endDate.getTime()-startDate.getTime())
    const randomDate=new Date(randomTime)
    return randomDate
  }

}
