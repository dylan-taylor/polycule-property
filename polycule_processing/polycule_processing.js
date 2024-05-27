function setup() {
  createCanvas(500, 500);
  people = [];
  // Adding people to the relationship
  createSpan("Name: ");
  person_name = createInput();
  createP();
  createSpan("Days joined: ");
  entry_date = createInput();
  createP();
  add_person_button = createButton("Add Person");
  add_person_button.mouseClicked(add_person);
}


function draw() {
  background(220)
  for (let i = 0; i < people.length; i++) {
    people[i].draw()
  }
  if (deletion_line) {
    stroke(155, 60, 60)
    line(deletion_start[0], deletion_start[1], mouseX, mouseY)
  }
}

function add_person() {
  people.push(new Person(person_name.value, entry_date.value))
}

class Person {
  constructor(name, days) {
    this.name = name
    this.days = days
    this.radius = 15 
    this.x_location = random(this.radius, width-this.radius)
    this.y_location = random(this.radius, height-this.radius)
    
    this.relations = []
  }
  
  draw() {
    stroke(0, 0, 0)
    circle(this.x_location, this.y_location, 30)
    for (let i = 0; i < this.relations.length; i++) {
      stroke(0, 0, 0)
      line(this.x_location, this.y_location, this.relations[i].x_location, this.relations[i].y_location)
    }

  }
  
  mouse_in(x, y) {
    if (sqrt(pow(this.x_location-x, 2)+pow(this.y_location-y, 2))<this.radius) {
      return true
    } else {
      return false
    }
  }
  
  add_relationship(other) {
    if (!this.relations.includes(other)) {
      this.relations.push(other)
    }
  }
  function deletion_intersection(x_end, y_end) {
    relations_to_remove = []
    deletion_line = [x_start, x_end, x_end, y_end]
    for (let j = 0; j < current_person.relations.length; j++) {
      current_relation = current_person.relations[j]
      relation_line = [current_person.x_location, current_person.y_location, current_relation.x_location, current_relation.y_location]
            
    }
  }
}

function mousePressed() {
  selection_start = false
  deletion_line = false
  
  for (let i = 0; i < people.length; i++) {
    if (people[i].mouse_in(mouseX, mouseY)) {
      selection_start = people[i]
    }
  }
  
  if (selection_start == false) {
    deletion_start = [mouseX, mouseY]
    deletion_line = true
  }
  
}


function mouseReleased() {
  selection_end = false
  for (let i = 0; i < people.length; i++) {
    if (people[i].mouse_in(mouseX, mouseY)) {
      selection_end = people[i]
    }
  }
  if (selection_start != false && selection_end != false) {
    selection_start.add_relationship(selection_end)
    selection_end.add_relationship(selection_start)
  }
  
  if (deletion_line) {
    deletion_line = false
    relati
  }
}
