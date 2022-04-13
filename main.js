function CourseInfo(ID, name, section, info, detail) {
  this.ID = ID;
  this.name = name;
  this.section = section;
  this.info = info;
  this.extra_detail = detail;
}


let PUI = new CourseInfo("05-430", "Programmable User Interface", "Section: A and B", "Description: This course is combines lecture, and an intensive programming lab...", "Description: This course is combines lecture, and an intensive programming lab and design studio. It is for those who want to express their interactive ideas in working prototypes. It will cover the importance of human-computer interaction/interface design, iterative design, input/output techniques, how to design and evaluate interfaces, and research topics that will impact user interfaces in the future. In lab, you will learn how to design and program effective graphical user interfaces, and how to perform user tests. We will cover a number of prototyping tools and require prototypes to be constructed in each, ranging from animated mock-ups to fully functional programs. Assignments will require implementing UIs, testing that interface with users, and then modifying the interface based on findings. Some class sessions will feature design reviews of student work. This course is for HCII Masters students and HCI dual majors with a minimal programming background. Students will often not be professional programmers, but will need to interact with programmers.");

let Opti = new CourseInfo("70-257", "Optimization for Business", "Section: A and B", "Description: This course provides a mathematical foundation for the application of optimization...", "This course provides a mathematical foundation for the application of optimization and analytic techniques to business problems, as well as the practical implementation of these methods. Mathematical optimization techniques have been applied for decades in the context of logistics, supply chain management, and strategic planning, with great success. In recent years, the application of mathematical optimization has penetrated, and in some cases (re-)defined, many other areas such as the (financial) service industry, analytical marketing, health care, and web-based businesses. In this course, the most important methods and techniques underlying mathematical optimization are studied. These include linear programming, integer programming, and nonlinear programming as basic mathematical methodologies. Based on these, we also consider methodologies for particular problem classes such as network models and traveling salesman problems. During the course we will emphasize mathematical modeling, that is, creating a mathematical description that reflects a given practical problem described in words. Motivated by these mathematical models, we then discuss the necessary mathematical techniques for finding optimal solutions. Lastly, we consider the solution of these problems using optimization software, i.e., we represent the mathematical models in Excel and use Excel Solver to compute an optimal solution.");

let BusComp = new CourseInfo("70-110", "Business Computing", "Section: A and B", "Description: Students will learn how individuals and organizations use computing technologies...", "Description: Students will learn how individuals and organizations use computing technologies to support and improve their businesses. At an individual level, students will build their skills with Microsoft Excel and other personal productivity tools. At an organizational level, the class looks at ways in which businesses of all sizes and types leverage computing technologies to run their businesses more efficiently, make better business decisions, and create new business opportunities. This course is reserved for first-year Business students; others may enroll by special permission from the UBA office only.");

let currCourses = [PUI, Opti, BusComp];
var currRegCourses = localStorage.setItem("currRegCourses", JSON.stringify([]));
let currNumCourses = 0;
document.getElementById("num-courses").innerHTML = currNumCourses;


function searchClass() {
  let classInput = document.getElementById("search-input");
  for (let i = 0; i<currCourses.length; i++) {
    if (classInput.value == currCourses[i].ID) {
      document.getElementById("searched-course-ID").textContent = currCourses[i].ID;
      document.getElementById("searched-course-name").textContent = currCourses[i].name;
      document.getElementById("searched-course-section").textContent = currCourses[i].section;
      document.getElementById("searched-course-info").textContent = currCourses[i].info;
      document.getElementById('addClass').style.display= 'block';
      document.getElementById('dropClass').style.display= 'block';
      document.getElementById('learnMore').style.display= 'block';
    }
  }
}

function addNewClass() {
  let classInput = document.getElementById("search-input");
  for (let i = 0; i<currCourses.length; i++) {
    if (classInput.value == currCourses[i].ID) {
      currNumCourses += 1;
      console.log(currNumCourses);
      document.getElementById("num-courses").innerHTML = currNumCourses;
      var currRegCourses = JSON.parse(localStorage.getItem("currRegCourses"));
      currRegCourses.push(classInput.value);
      var currRegCourses = localStorage.setItem("currRegCourses", JSON.stringify(currRegCourses));
      console.log(currRegCourses);
      alert("Class added!");
      return;
    }
  }
  alert("Invalid Class!")
}

function addRegCourses() {
  var currRegCourses = JSON.parse(localStorage.getItem("currRegCourses"));
  for (let j = 0; j<currRegCourses.length; j++) {
    for (let i = 0; i<currCourses.length; i++) {
      if (currRegCourses[j] == currCourses[i]) {
        console.log("Hi");
        text = currCourses[i].ID + " " +currCourses[i].name + " " + currCourses[i].section + " <br>"
        document.getElementById("reg-courses").innerHTML += text;
      }
    }
  }
}


function dropClass() {
  let classInput = document.getElementById("search-input");
  var currRegCourses = JSON.parse(localStorage.getItem("currRegCourses"));
  for (let i = 0; i<currRegCourses.length; i++) {
    if (classInput.value == currRegCourses[i]){
      currNumCourses -= 1;
      console.log(currNumCourses);
      document.getElementById("num-courses").innerHTML = currNumCourses;
      currRegCourses.splice(i,1);
      var currRegCourses = localStorage.setItem("currRegCourses", JSON.stringify(currRegCourses));
      console.log(currRegCourses);
      alert("Class Dropped!");
      return;
    }
  }
  alert("Invalid Class!");
}

function learnMore() {
  // very similar to searchClass
  // using local storage instead
  // localStorage.setItem --> set variable for index class
  // local.Storage.getItem --> gets the index of the searched class
  let classInput = document.getElementById("search-input");
  for (let i = 0; i<currCourses.length; i++) {
    if (classInput.value == currCourses[i].ID) {
      localStorage.setItem("currCourseIdx", i);
    }
  }
}

function onLoadDetail() {
  document.getElementById("reg-course-ID").textContent = PUI.ID;

  document.getElementById("reg-course-name").textContent = PUI.name;

  document.getElementById("reg-course-section").textContent = PUI.section;


}
function onLoad() {
  var currCourseIdx = localStorage.getItem("currCourseIdx");
  document.getElementById("detail-course-ID").textContent = currCourses[currCourseIdx].ID;

  document.getElementById("detail-course-name").textContent = currCourses[currCourseIdx].name;

  document.getElementById("detail-course-section").textContent = currCourses[currCourseIdx].section;

  document.getElementById("detail-extra-info").textContent = currCourses[currCourseIdx].extra_detail;
}
