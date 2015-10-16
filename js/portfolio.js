var sections = document.getElementsByClassName('sec');

var buttons = document.getElementsByClassName('inner');
buttons.onclick = function(){
  console.log(this.href);
}
