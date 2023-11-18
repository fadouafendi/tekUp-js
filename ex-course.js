function reverse_tab(tab){
  let tab2=[]
  for (let i=0;i<tab.length;i++){
    tab2.push(tab[tab.length-i-1]);
  }
  return tab2;
}

let t=[1,1,2,2,3];
console.log(reverse_tab(t));
