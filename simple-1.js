function main(){
    console.log('A');
    setTimeout( function display(){ console.log('B'); },0);
    console.log('C');
  }
  main();  