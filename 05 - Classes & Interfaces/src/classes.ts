abstract class Department {
  static fiscalYear = 2020;
  // default modifier is 'public'
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
    // console.log(this.fiscalYear) // This doesn't work
    // console.log(Department.fiscalYear) // This does!
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    // if using this keyword, it must be after super()
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string): void {
    if (name === "Brandon") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Brandon");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Brandon"]);

it.addEmployee("Brandon");
it.addEmployee("Cricket");

// accounting.employees[2] = "Anna";

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance(); // This is the same instance!

// console.log(accounting.mostRecentReport); // Throws no report found error

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
accounting.addEmployee("Brandon");
accounting.addEmployee("Cricket");
accounting.printReports();
accounting.printEmployeeInformation();

console.log(accounting.mostRecentReport); // This does not throw an error

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
