# To-Do-App-Pro
to see our page click [here](https://lotus-1.github.io/To-Do-App-Pro/)  

team members:   
1- Maha @maha276  
2- Loreen @loreen17  
3- Hoda @hodamansour  
4- Noor @Noorb7188  

*Before we start working on our code we write a tests using TDD ;TDD is a methodology for writing code where you write the tests before your functions. This way you are forced to really think through exactly what you want your code to do before you start writing it. It's like planning an essay. :blush:*

### login.js:
We create 3 functions : `addTodo`, `deleteTodo`, `markTodo`; first we used `cloneArrayOfObjects` that create a copy of the todos array wich can't be changed :
 <br>`cloneArrayOfObjects: function(todos) {`
 <br>`return todos.map(function(todo){`  
 `return JSON.parse(JSON.stringify(todo));`
 <br>`})`;
<br>then returns a new array, it should contain `todos` with the `newTodo` added to the end.
lastly we added an id to the `newTodo` used the `generateId` function to create an id :
<br>`(function() {`
  <br>`var idCounter = 0;`
  <br>`function incrementCounter() {`
    <br>`return (idCounter += 1);`
  <br>`}`
  <br>`return incrementCounter;`
<br>`})(),`

### dom.js:
First we added a span holding the description :
<br>`var spanHolder = document.createElement("span");``
<br>`var spanText =` <br>`document.createTextNode(todo.description);`
    <br>`spanHolder.appendChild(spanText);`
    <br>`todoNode.appendChild(spanHolder);`
<br>then we added the delete and the mark button and lastly we did css design.
<br>We used `addEventListener` that allows us to run the delete and mark buttons.

It was very fun,interesting and challenging :sparkles::sparkles::star2:

We enjoy working together :sparkling_heart::heart_eyes:
