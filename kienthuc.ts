//1. Basic type
    // string
    let car = 'Toyota'
    let bike: string
    bike = 'Winner'
    // bike = 150 Loi ngay

    // number
    let num: number = 10

    // boolean
    let isLoading: boolean = false

    // undefined
    let unde = undefined

    // null
    let footer: null

    // any
    let person: any
    person = 10
    person = 'Something'
    person = false


//2. Object type
    let house_js = {}
    // house1_js.address = 'Da Nang' //error

    let house_ts: {
      address: string
      color?: string //optional variable
    } = {
      address: ''
    }
    house_ts.address = 'Da Nang'


//3. Array type
    //any type of array
    let products: any[] = []
    products.push(1)
    products.push('VietNam')
    products.push(true)

    // string[] type of array
    let names = ['Alex', 'Ben']
    let addresses: string[] = []
    addresses.push('Da Nang')
    // addresses.push(123) //error

    // number[] type of array
    let numbers: number[] = []
    numbers = [1, 2, 3]
    // numbers = [1, 2, 3, '4'] //error

    // object array type of array
    let people: {
      name: string
      age: number
    }[] = []
    people.push({
      name: 'Ducky',
      age: 27
    })


//4. Function type
    const sum = (num1: number, num2: number): number => {
      return num1 + num2
    } //khi có return thì phải khai báo kiểu giá trị trả về cho function

    sum(1, 2)
    // sum(1, '2') //error

    const sub: (num1: number, num2: number) => number = (
      num1: number,
      num2: number
    ) => num1 - num2

//nhận một giá trị bất kỳ với kiểu dữ liệu được xác định khi hàm được gọi
    const handleClick = <Type>(value: Type) => value
    let value = 100
    let string = 'string'
    handleClick<string>(string) //nếu nhận string thì khai báo string
    handleClick<number>(value) //nếu nhận number thì khai báo number


//5. Union type - liên minh type - nhận nhiều types
    let price: string | number | boolean
    price = '10'
    price = 20
    price = false

    let body: { name: string | number } | { firstName: string } = {
      name: 100,
      firstName: '100',
      //có thể nhận name:string | number hoặc firstName: string
    }


//6.Enum type - giống constants
    enum Sizes {
      S = 'S',
      M = 'M',
      L = 'L',
      XL = 'XL'
    }

    let s_size = Sizes.S //giá trị là S
    let m_size = Sizes.M //giá trị là M 


//7.Interface type - dùng khai báo type cho object
    interface State {
      name: string
      isLoading: boolean
    }

    interface State {
      age: number
    } //khai báo đè thì sẽ cộng gộp hoặc ghi đè nếu trùng

    let state: State = {
      name: 'Dang',
      isLoading: false,
      age: 100,
      // age: '123' //error
    }

    interface Name  {
      name: string
    }
    interface Age {
      age: number 
    }

    //BAO GỒM CÁC THUỘC TÍNH CỦA 2 NAME và AGE
      interface IPerson extends Name, Age {} //kiểu giao nhau (intersection type)
      //IPerson sẽ là một interface bao gồm cả hai thuộc tính name và age
      let name_age: IPerson = {
        name: 'John', 
        age: 36
      }

    //CHỈ BAO GỒM 1 TRONG 2 THUỘC TÍNH CỦA NAME và AGE
      type State_union = Name | Age;
      let stateWithName: State_union = {
        name: 'Dang',
        // age: 100, // Error: Type '{ name: string; age: number; }' is not assignable to type 'State_union'.
      };
      let stateWithAge: State_union = {
        age: 100,
        // name: 'Dang', // Error: Type '{ age: number; name: string; }' is not assignable to type 'State'.
      };


//8.Type - dùng được cho all TH
    type State_type = {
      name: string
      isLoading: boolean
    }

    let state_type: State_type = { //dùng kiểu State_type định nghĩa bên ngoài
      name: 'Dang',
      // name: 123, //error 
      isLoading: false
    }

    type Name_type = {
      name: string
    }
    type Age_type = {
      age: number
    }

    type Person_union_type = Name | Age //chỉ có 1 thuộc tính name hoặc age
    type Person_intersection_type = Name_type & Age_type; //bao gồm cả thuộc tính name và age


//9. Class

    class Person1 {
      private name: string //biến chỉ dùng trong class Person1
      age: number //biến public dùng all mọi nới như biến global
      protected address: string //biến được truy cập trong class Person1 và các class con kế thừa
      readonly money: number = 40 //biến chỉ đọc trong class Person1 và không modifier(sửa) được

      constructor(name: string, age: number, address: string) {
        this.name = name
        this.age = age
        this.address = address
      } //hàm khởi tạo của class Person1

      handle() {
        let value = this.money
      }
    }

    const alex = new Person1('Alex', 27, 'Ha noi') //tạo đối tượng mới từ class Person1

    // alex.money = 200 //error vì money là biến readonly

    //tạo class Person2 kế thừa Person1
    class Employee  extends Person1 {
      salary: number

      constructor(name: string, age: number, address: string, salary: number) {
        super(name, age, address)
        this.salary = salary
      }
      getEmployeeAddress(): string {
        return this.address; // Truy cập hợp lệ vì Employee kế thừa từ Person1
      }
    }
    let jonh = new Employee ('Jonh', 20, 'Ha noi' , 1000)
    // jonh.name = 'Jonh1' //errr vì name là biến private của Person1
    // jonh.address = 'Sai gon' //errr vì address là biến protected của Person1 không truy cập bên ngoài được


//10. shorthand class syntax

    class Person {
      constructor(public name: string, public age: number, protected address: string) {}
    }

    let mt = new Person('Minh Tien', 30, "QN");
    mt.age = 29
    // mt.address ='Da nang' //error vì address là biến protected không truy cập bên ngoài được

//11. Inheritance(kế thừa) trong class

    class Person3 {
      private firstName: string;
      private lastName: string;
      constructor(firstName: string, lastName: string) {
          this.firstName = firstName;
          this.lastName = lastName;
      }
      getFullName(): string {
          return `${this.firstName} ${this.lastName}`;
      }
    }
    class Employee1 extends Person3 {
      private jobTitle: string;
      constructor(firstName: string, lastName: string, jobTitle: string) {
          super(firstName, lastName); // Gọi hàm khởi tạo của lớp cha
          this.jobTitle = jobTitle;
      }
      getFullName(): string {
          // Sử dụng phương thức getFullName của lớp cha và thêm logic mới
          return `${super.getFullName()} (${this.jobTitle})`;
      }
      getJobTitle(): string {
          return this.jobTitle;
      }
      getEmployeeDetails(): string {
          return `${this.getFullName()}, Job Title: ${this.jobTitle}`;
      }
    }
    // Ví dụ sử dụng lớp Employee1
    const employee = new Employee1('John', 'Doe', 'Software Engineer');
    console.log(employee.getFullName()); // Output: John Doe (Software Engineer)
    console.log(employee.getEmployeeDetails()); // Output: John Doe (Software Engineer), Job Title: Software Engineer

    // super(firstName, lastName); được gọi, kích hoạt hàm khởi tạo của lớp cha Person3 với các tham số 'John' và 'Doe'.


//12. Static và Public  trong class

  //Static: gọi trực tiếp ClassName.methodName / ClassName.properties
  //Public: gọi thông qua đối tượng tạo ra từ class Instance.methodName / Instance.properties

      class Circle {
        // Thuộc tính tĩnh (static)
        static pi: number = 3.14;
        // Thuộc tính công khai (public)
        public test: number = 69;
        public radius: number;
        // Phương thức tĩnh (static)
        static calculateArea(radius: number): number {
            return this.pi * radius * radius;
        }
        // Phương thức công khai (public)
        public getArea(): number {
            return Circle.pi * this.radius * this.radius;
        }
      }
      let hinhtron = new Circle();
      // Truy cập vào thuộc tính công khai của đối tượng
      console.log(">>> check test = ", hinhtron.test); // Output: 69
      // Truy cập vào phương thức tĩnh của lớp
      console.log(">>> check pi = ", Circle.calculateArea(10)); // Output: 314

  //Static: có thể truy cập vào chúng mà không cần phải tạo ra một đối tượng của lớp đó(Circle.calculateArea(10))
  //Public: để truy cập vào thuộc tính này, bạn cần tạo một đối tượng từ lớp Circle
            // và truy cập nó qua đối tượng đó (hinhtron.test).
  //Phạm vi và mục đích sử dụng:
      //public: Thường được sử dụng để lưu trữ và thao tác dữ liệu liên quan đến các đối tượng cụ thể của lớp.
      //static: Thường được sử dụng cho các dữ liệu hoặc phương thức 
                //mà không liên quan đến bất kỳ đối tượng cụ thể nào, mà thuộc về lớp nói chung.


//Lớp Trừu Tượng (Abstract Class) - giống như khuôn cho các class khác tuân theo cấu trúc đó

      //Lớp trừu tượng cung cấp một cấu trúc cơ bản mà từ đó các lớp cụ thể khác có thể kế thừa và mở rộng.
          // KHÔNG THỂ khởi tạo một đối tượng từ lớp trừu tượng trực tiếp
      // Phương thức trừu tượng đảm bảo rằng các lớp con sẽ có các phương thức cụ thể
          // mà lớp trừu tượng yêu cầu.
      // Sử dụng abstract giúp tạo ra các lớp cơ sở mạnh mẽ và linh hoạt, /
          // đồng thời đảm bảo các lớp con tuân thủ một cấu trúc nhất định.
    
      // Định nghĩa một lớp trừu tượng Animal
      abstract class Animal {
        // Thuộc tính công khai
        public name: string;
        constructor(name: string) {
            this.name = name;
        }
        // Phương thức trừu tượng (không có phần thân)
        abstract makeSound(): void;
        // Phương thức không trừu tượng (có phần thân)
        move(): void {
            console.log(`${this.name} is moving.`);
        }
      }
      // Định nghĩa một lớp con Dog kế thừa từ lớp trừu tượng Animal
      class Dog extends Animal {
        // Cài đặt phương thức trừu tượng makeSound
        makeSound(): void {
            console.log(`${this.name} says: Woof! Woof!`);
        }
      }
      // Định nghĩa một lớp con Cat kế thừa từ lớp trừu tượng Animal
      class Cat extends Animal {
        // Cài đặt phương thức trừu tượng makeSound
        makeSound(): void {
            console.log(`${this.name} says: Meow! Meow!`);
        }
      }
      // Tạo đối tượng từ lớp Dog
      let dog = new Dog('Buddy');
      dog.makeSound(); // Output: Buddy says: Woof! Woof!
      dog.move();      // Output: Buddy is moving.
      // Tạo đối tượng từ lớp Cat
      let cat = new Cat('Whiskers');
      cat.makeSound(); // Output: Whiskers says: Meow! Meow!
      cat.move();      // Output: Whiskers is moving.

  //Giải thích:
  //1.Lớp Trừu Tượng Animal:
    // Animal là một lớp trừu tượng với một phương thức trừu tượng makeSound và một phương thức không trừu tượng move.
    // Phương thức makeSound không có phần thân, buộc các lớp con phải cài đặt.
  // 2.Lớp Con Dog và Cat:
    // Dog và Cat kế thừa từ Animal và phải cài đặt phương thức makeSound.
    // Các lớp con này có thể có các phương thức và thuộc tính riêng của chúng.
  // 3.Khởi Tạo Đối Tượng:
    // Bạn không thể khởi tạo một đối tượng từ lớp trừu tượng Animal trực tiếp.
    // Bạn có thể khởi tạo đối tượng từ các lớp con Dog và Cat, và sử dụng các phương thức đã cài đặt.
