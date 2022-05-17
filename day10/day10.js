//các cách truy cập thuộc tính bên trong object.
    let person = {
        name: 'Bob',
        occupation: 'web developer',
        hobbies: 'painting', 
    };
    //sử dụng toán tử dấu chấm.
        console.log(person.name);
        console.log(person.occupation);
        console.log(person.hobbies);
    //bằng dấu ngoặc vuông.
        console.log(person['name']);
        console.log(person['occupation']);
        console.log(person['hobbies']);
    //đặt biến.
        let a = 'name'; console.log(person[a]);
        let b = 'occupation'; console.log(person[b]);
        let c = 'hobbies'; console.log(person[c]);
//
//HW2
    let obj = {
        b: 2,
        a: 1,
        c: 3, 
    };
    const arrKeys = Object.keys(obj);

    for (let i = 0; i < arrKeys.length; i++) {
     arrKeys[i] = arrKeys[i].toUpperCase();
    }
    console.log(arrKeys);
//
//HW3
    let myFamily = {
        quantity: 4,
        member: ["Dad", "Mom", "Me", "Daughter"],
        location: "Vietnam",
    };
    let family = myFamily;
        family.quantity = 5;
        family.member.push("Brother");
        console.log(myFamily);
        console.log(family);
//
//HW4
    let obj1 = {
        foo: { a: "hello", b: "world" },
        bar: ["example", "mem", null, { xyz: 6 }, 88],
        qux: [4, 8, 12],
    };
    //Cách 1
    let temp = obj1.bar;
    temp[3].xyz = 606;

    //Cách 2
    obj1["bar"][3]["xyz"] = 606;
    
    //Cách 3
    let obj2 = {
        foo: { a: "hello", b: "world" },
        bar: ["example", "mem", null, { xyz: 606 }, 88],
        qux: [4, 8, 12],
    };
    let x = Object.assign(obj, obj2);

console.log(obj1);