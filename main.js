let currCoursesID = [05-430, 70-257, 70-110, 15-110, 15-112];
let currnNumCourses = 0;
document.getElementById("num-courses") = currNumCourses;

function addNewClass() {
  let classInput = document.getElementById("text-input");
  for (let i = 0; i<currCoursesID.length; i++) {
    if (classInput.value == currCoursesID[i]) {
      currNumCourses += 1;
      document.getElementById("num-courses") = currNumCourses;
      alert("Class added!");
      console.log(currNumCourses);
      return; 
    }
    alert("Invalid Class!");
  }
}
