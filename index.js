function getFirstSelector(selector){
  return document.querySelector(selector);
};

function nestedTarget(){
  //pulls .target out of #nested
  //must be arbitrary with regard to tags
  return document.querySelector("#nested .target");
};

function increaseRankBy(n){
  //increases the ranks of all .ranked-list by n
  //user parseInt()
  const listItems = document.querySelectorAll('.ranked-list li')
  for(let i = 0; i < listItems.length; i++){
    listItems[i].innerHTML = parseInt(listItems[i].innerHTML) + n
  }
};

function deepestChild(){
  //pulls out most deeply nested child from div#grand-node
  //this one doesn't need to be generic
  let selector = '#grand-node';
  
};
