import Persons from "./persons.js";

class Students extends Persons {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  getStudentsDetails() {
    const details = super.getDetails();
    return `${details}, Grade: ${this.grade}`;
  }
}
export default Students;
