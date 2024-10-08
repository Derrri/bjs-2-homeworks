function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student("Владимир", "мужской", 43);
let student2 = new Student("Виктория", "женский", 17);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.marks) {
    this.marks = [...this.marks, ...marksToAdd];
  }
};

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }

  return this.marks.reduce((sum, num) => sum + num, 0) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
