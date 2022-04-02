let currCoursesID = ['05-430', '70-257', '70-110', '15-110', '15-112'];
let currRegCourses = [];
let currNumCourses = 0;
document.getElementById("num-courses").innerHTML = currNumCourses;

function addNewClass() {
  let classInput = document.getElementById("text-input");
  for (let i = 0; i<currCoursesID.length; i++) {
    if (classInput.value == currCoursesID[i]) {
      currNumCourses += 1;
      console.log(currNumCourses);
      document.getElementById("num-courses").innerHTML = currNumCourses;
      currRegCourses.push(classInput.value);
      console.log(currRegCourses);
      alert("Class added!");
      return; 
    }
  }
  alert("Invalid Class!")
}

function dropClass() {
  let classInput = document.getElementById("text-input");
  for (let i = 0; i<currRegCourses.length; i++) {
    if (classInput.value == currRegCourses[i]){
      currNumCourses -= 1; 
      console.log(currNumCourses);
      document.getElementById("num-courses").innerHTML = currNumCourses;
      currRegCourses.splice(i,1);
      console.log(currRegCourses);
      alert("Class Dropped!");
      return;
    }
  }
  alert("Invalid Class!");
}

function CourseInfo(ID, name, section, info) {
  this.ID = ID; 
  this.name = name; 
  this.section = section; 
  this.info = info; 
}

