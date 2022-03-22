let currCourses = [05-430, 70-257, 70-110, 15-110, 15-112];
let currCourses = 0;

function addNewClass() {
  document.getElementById("num-courses") = currCourses;
  let classInput = document.getElementById("text-input");
  for (let i = 0; i<currCourses.length; i++) {
    if (classInput.value == currCourses[i]) {
      currCourses += 1;
      document.getElementById("num-courses") = currCourses;
      alert("Class added!");
      document.write(currCourses);
      console.log(currCourses);
      return; 
    }
    alert("Invalid Class!");
  }
}
