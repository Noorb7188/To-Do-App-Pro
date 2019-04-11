var test = require('tape');
var logic = require('./logic');

var testTodos = [
  {
   id:1,
   description: "finish todo app",
   done: false
 },
 {
  id: 2,
  description: "Do my homework",
  done: false
 }
]

var newTodoTest = {
  id: 3,
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
  t.deepEqual(actual, expected, 'returned array is a copy the original array');
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
  description: "Do my homework",
  done: false
},
{
  id: 3,
  description: "practice TDD",
  done: false
}
];
t.deepEqual(actual, expected, 'New todo has been added to the todo array');
t.end();
});

var testIdToDelete = 1;

test('leaves the input argument unchanged', function(t){
  var actual = testTodos === logic.deleteTodo(testTodos, testIdToDelete);
  var expected = false;

  t.equal(actual, expected, 'Return array is a copy of original array');
  t.end();
});

test('Testing deleteTodo', function(t){
  var actual = logic.deleteTodo(testTodos, testIdToDelete);
  var expected = [
    {
     id: 2,
     description: "Do my homework",
     done: false
    }
  ];

  t.deepEqual(actual, expected, 'choosen todo with id has been deleted from the list');
  t.end();
});

var testIdToMark = 2;
test('leaves the input argument unchanged', function(t){
  var actual = testTodos === logic.markTodo(testTodos, testIdToMark);
  var expected = false;

  t.equal(actual, expected, 'choosen todo with id has been marked in the list');
  t.end();
});

test('Testing markTodo', function(t) {
  var actual = logic.markTodo(testTodos, testIdToMark);
  var expected = [
    {
     id:1,
     description: "finish todo app",
     done: false
   },
   {
    id: 2,
    description: "Do my homework",
    done: true
   }
 ];
 t.deepEqual(actual, expected, 'choosen todo with id has been marked in the list');
 t.end();
});
