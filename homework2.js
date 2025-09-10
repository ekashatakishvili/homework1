class Student{
    name;
    grades;

    constructor(_name, _grades){
        this.name=_name;
        this.grades=_grades;
    }


}calculateaverage() 
{
    throw new Error("child class should implaement this metod")
}

class HighschoolStudent extends Student {
    calculateaverage(){
        if(!Array.isArray(this.grades)){
            throw new TypeError("Grades must")

        }
        return this.grades.reduce((acc, curr))
    }
}
export default class collegeStudent extends Student{
    calculateaverage(){
        const sum = this.grades.reduce((a, b)=>a+b,0);
        return sum/ this.grades.length*1.05;
    }
}
const student=[
    new HightSchoolStudent("Alice",[80,90,85]),
    new collegeStudent("Bob", [75, 85, 95])
];
student.forEach(student=>{
    console.log('${student.name} საშუალო შეფასება: ${student.calculateaverage()}');
});