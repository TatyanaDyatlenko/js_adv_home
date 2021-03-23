// Добавьте после дива с id=one еще один див с текстом two и id=two
    // На клик по id=two добавьте перед ним див с id - two_first, а див с id=two измените на two_second 
var div1 = document.getElementById('one');
var newDiv = document.createElement('div');
newDiv.id = 'two';
newDiv.innerHTML = 'two';
document.body.appendChild(newDiv);
console.log(newDiv);
newDiv.onclick = AddDiv;
        
function AddDiv(){
  var divToAdd = '<div id="two_first"></div>';
    newDiv.insertAdjacentHTML('beforeBegin', divToAdd);
    newDiv.id = 'two_second';
}
