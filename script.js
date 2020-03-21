var name = "Chioma";
var courses = ["Html", "Css", "JavaScript", "nodeJS"];
console.log(name);
console.log(courses);
var lengthOfCourses = courses.length;
for (let i = 2; i <= 200; i++) {
    if (lengthOfCourses % 2 == 0) {
        console.log(i++)
    }
}