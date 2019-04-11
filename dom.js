// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  // var list = document.getElementsByTagName("ul")[0];
  // list.setAttribute("id", "todoListId");
  var state = [
    { id: -3, description: '' },
    { id: -2, description: '' },
    { id: -1, description: '' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');

  //  add span holding description
 var spanHolder = document.createElement("span");
 var spanText = document.createTextNode(todo.description);
     spanHolder.appendChild(spanText);
     todoNode.appendChild(spanHolder);

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    var btnName = document.createTextNode("delete");
    deleteButtonNode.appendChild(btnName);
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markButtonNode = document.createElement('button');
     var btnName = document.createTextNode("mark");
     markButtonNode.appendChild(btnName);
     markButtonNode.addEventListener('click', function(event) {

      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);

    });
    if (todo.done) {
   var result =  todo.description.strike();
      spanHolder.innerHTML = result;
    }
    todoNode.appendChild(markButtonNode);
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what is inside event.target?
     event.preventDefault();
     var description = event.target.firstElementChild.value;
     var newState = todoFunctions.addTodo(state, {description : description});
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
