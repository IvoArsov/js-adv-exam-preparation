let expect = require('chai').expect;

//////////////////////////////////////// class/iffe/func for test here
class Student{
    constructor(age, course, firstName){
        [this.age, this.course, this.firstName] = [age, course, firstName];
        this.studentList = [];
    }

    addSubject(subjectTitle, evaluation){
        if(typeof evaluation != 'number'){
            this.studentList.push({subject:subjectTitle, evaluation:"no valid evaluation"});
        } else {
            this.studentList.push({subject:subjectTitle, evaluation:Number(evaluation)});
        }

        this.studentList.sort((a,b) => b.evaluation - a.evaluation);
        return this;
    }

    toString(){
        let stringInfo = `Student : ${this.firstName} of "${this.course}" at ${this.age} year old\nwith:`;
        for(let sub of this.studentList){
            stringInfo += `\nSubject: ${sub.subject} -> ${sub.evaluation}`
        }
        return stringInfo;
    }
}

//////////////////////////////////////////////////


/////////////////////////////////TESTS/////////////////////////

describe("test Student class", () => {
    let student;
    beforeEach(() => {
        student = new Student(22, "Computer science", "Ivan")
    });

    describe("test addSubject()", () => {

        it("test with valid entries, should print correct data on console", () => {
            student.addSubject("noSQL", 4);
            expect(student.toString()).to.equal('Student : Ivan of "Computer science" at 22 year old\nwith:\nSubject: noSQL -> 4')
        });


    });

    describe("test functions of class", () => {
        it("test is are real functions", () => {
            expect(typeof(student.addSubject)).to.equal('function');
            expect(typeof(student.toString)).to.equal('function');
        });
    });

});