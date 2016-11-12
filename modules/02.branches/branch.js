let Employee = require('./employee.js').Employee;

class Branch {
    constructor (id, branchName, companyName) {
        this._branchId = id;
        this._branchName = branchName;
        this._companyName = companyName;
        this._employees = [];
    }

    get employees () {
        return this._employees;
    }

    hire (employee) {
        this._employees.push(employee);
    }

    toString () {
        let resultString = `@ ${this._companyName}, ${this._branchName}, ${this._branchId}\n`;
        resultString += `Employed:\n`;
        if (this._employees.length <= 0) {
            resultString += 'None...';
        } else {
            let employeesToSring = '';
            for (let i = 0; i < this.employees.length; i++) {
                if (i === this.employees.length - 1) {
                    employeesToSring += `** ${this.employees[i].toString()}`;
                } else {
                    employeesToSring += `** ${this.employees[i].toString()}\n`;
                }
            }

            resultString += employeesToSring;
        }
        return resultString;
    }
}

module.exports.Branch = Branch;