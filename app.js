const studentName = document.getElementById("name");
const courseName = document.getElementById("course");
const courseAmount = document.getElementById("amount");
const addBtn = document.querySelector(".btn");
const studentList = document.getElementById("student-list");


addBtn.addEventListener("click", function(event){
    event.preventDefault();


    if( studentName.value == "" || courseName.value == "" || courseAmount.value == ""){
        alert("Fill The All Fields") //form validation
    } else {
        // console.log( studentName.value, courseName.value, courseAmount.value)

        // Creating student row
        const newRow = document.createElement('tr');

        //creating student name table data
        const newStudentName = document.createElement('td');
        newStudentName.innerHTML = studentName.value;
        newRow.appendChild(newStudentName);

        //creating course name table data
        const newCourseName = document.createElement('td');
        newCourseName.innerHTML = courseName.value;
        newRow.appendChild(newCourseName);

        //creating course name table data
        const newCourseAmount = document.createElement('td');
        newCourseAmount.innerHTML = courseAmount.value;
        newRow.appendChild(newCourseAmount);

        // Display the tabele
        studentList.appendChild(newRow)

        //cleaning value after submission
        studentName.value = "";
        courseName.value = "";
        courseAmount.value = "";


    }

})

