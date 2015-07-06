class Base{
  constructor(){
    log('base constructed');
  }
}

class Child extends Base {
  constructor(){
    super();
    log('child constructed');
  }
}

export default function(){
  setup('hello', ()=>{
    let tmp = new Child();
    log('Hello World!!');
  });
}
