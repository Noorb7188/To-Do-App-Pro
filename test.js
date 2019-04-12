var test = require('tape');
var logic = require('./logic');

var testTodos = [
  {
   id:1,
   description: "finish todo app",
   done: false
 }
]

var newTodoTest = {
  description: "practice TDD",
  done: false
}

test('Testing tape', function(t) {
  t.equal(1, 1, "tape is working");
  t.end();
});

test('leaves the original array unchanged', function(t){
  var actual = testTodos === logic.addTodo(testTodos, newTodoTest);
  var expected = false;
  t.equal(actual, expected, 'returned array is a copy the original array');

  var actual = testTodos === logic.markTodo(testTodos, 1);
  var expected = false;
  t.equal(actual, expected, 'returned array is a copy the original array');

  var actual = testTodos === logic.deleteTodo(testTodos, 1);
  var expected = false;
  t.equal(actual, expected, 'Return array is a copy of original array');
  t.end();
})
test('Testing addTodo', function(t){
var actual = logic.addTodo(testTodos, newTodoTest);
var expected = [
  {
   id: 1,
   description: "finish todo app",
   done: false
 },
{
  id: 2,
  description: "practice TDD",
  done: false
}
];
t.deepEqual(actual, expected, 'New todo has been added to the todo array');
t.end();
});

test('Testing deleteTodo', function(t){
  var actual = logic.deleteTodo(testTodos, 1);
  var expected = [];
  t.deepEqual(actual, expected, 'choosen todo with id has been deleted from the list');
  t.end();
});

test('Testing markTodo', function(t) {
  var actual = logic.markTodo(testTodos, 1);
  var expected = [
    {
     id:1,
     description: "finish todo app",
     done: true
   }
 ];
 t.deepEqual(actual, expected, 'choosen todo with id has been marked in the list');
 t.end();
});
