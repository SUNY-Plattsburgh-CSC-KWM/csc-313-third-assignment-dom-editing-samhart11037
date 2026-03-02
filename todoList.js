const WorkItem = class {
    #taskDesc;
    #due;
    #prior;
    #comp;
    
    constructor(t, d, p, c){
        this.#taskDesc = t; //task description
        this.#due = d; //due date
        this.#prior = p; //priority
        this.#comp = c; //completion
    }

    get taskDesc(){
        return this.#taskDesc;
    }
    get due(){
        return this.#due;
    }
    get prior(){
        return this.#prior;
    }
    get comp(){
        return this.#comp;
    }
    set comp(x){
        this.#comp = true;
    }
}

let workItems = [];

function redraw() {
    document.getElementById("tasks").innerHTML = "";
    let newDiv = [];
    var i = 0;
    for (item in workItems){
        if (item[3] == "true"){
            itemComplete = `${item[0]}, ${item[1]}, ${item[2]}`;
            itemComplete.fontcolor("green");
            newDiv.push(`\n${i}. ${itemComplete}`);
        }
        if (item[3] == "false"){
            itemIncomplete = `${item[0]}, ${item[1]}, ${item[2]}`;
            itemIncomplete.fontcolor("red");
            newDiv.push(`\n${i}. ${itemIncomplete}`);
        }
        i += 1;
    }
    document.getElementById("tasks").innerHTML = `${newDiv}`;

}

function addItem() {
    //prompts for description, due date, and priority for each task
    const description = prompt("Please enter a description for your task: ");
    const date = prompt("Please enter the date your task is due: ");
    const priority = prompt("Please enter the priority level for your task: ");
    var isComplete = "false"

    const newItem = new WorkItem(description, date, priority, isComplete);
    workItems.push([`${newItem.taskDesc}`, `${newItem.due}`, `${newItem.prior}`, `${newItem.comp}`]);

    console.log(workItems);

    redraw();
}

function completeItem() {
    const itemNumber = prompt("Please enter the number of your completed task: ");
    workItems[itemNumber].comp = "true";

    redraw();
}
  
}
