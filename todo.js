// var chai = require('chai');
// expect = chai.expect;
var expect = require('chai').expect;

var taskList = []


// I can list my tasks

function listTasks (i){
  for (var i = 0; i < taskList.length; i++){
    return taskList[i];
}
}

// I can add a task to my list

function addTaskToList(task, list){
  // What is the task? parameter task
  // Where is the task goin? parameter list
  // What order / priority? lowest, on the bottom
  return list.push(task)
}

function removeTaskToList(task, list){


}

function editTaskToDoList(task, list){


}

function prioritizeTaskToDoList(task, list){


}

function completeTaskToDoList(task, list){


}

expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);
expect(taskList.length).to.equal(1);
addTaskToList("Take out the trash", taskList);
expect(taskList[1]).to.equal("Take out the trash");
expect(taskList.length).to.equal(2);

listTasks();
expect(listTasks()).to.equal("Remember the milk", "Take out the trash");
console.log(listTasks(i))
