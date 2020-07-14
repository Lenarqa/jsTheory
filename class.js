const animal = {
    name: 'Animal',
    age: 'age',
    hasTail: true
}

class Animal{
    static type = "ANIMAL";

    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    voice(){
        console.log("Hello voice");
    }
}

// const cat = new Animal({
//     name: 'cat',
//     age: '1',
//     hasTail: true
// })

class Cat extends Animal{
    static tape = "Cat";

    constructor(options){
        super(options);
        this.color = options.color;
    }

    voice(){
        console.log('I am cat');    
    }

    get ageInfo(){
        return this.age * 7;
    }

    set ageInfo(age){
        this.age = age
    }
}

const cat2 = new Cat({
    name: 'cat2',
    age: '2',
    hasTail: true,
    color: 'blue'
});

class Component{
    constructor(selector){
        this.$el = document.querySelector(selector);
    }

    hide(){
        this.$el.style.display = 'none';
    }

    show(){
        this.$el.style.display = 'block';
    }
}

class Box extends Component{
    constructor(options){
        super(options.selector);
        
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
        this.$el.style.transition = 'all .5s ease-in-out';
    }
}

const box1 = new Box({
    selector: '#box1',
    color: "red",
    size: 100
});

class Circle extends Box{
    constructor(options){
        super(options);
        this.$el.style.borderRadius = '50%';
    }
}

const circle = new Circle({
    selector: '#circle',
    color: "blue",
    size: 100
})
