export default class Queue {
    constructor(size){
        this.head = null;
        this.tail = null;
        //storing que as an array
        this.queue = Array(size);
        this.longth = size - 1 
    }

    //adds data to end of queue
    enque = (data) => {
        if(this.head === null){
            this.head = 0;
        }
        if(this.tail === null){
            this.tail = 0;
        }else if(this.tail === this.longth && this.queue[0] === null){
            this.tail = 0
        }else{
            ++this.tail;
        }
        this.queue[this.tail] = data;
        return true;
    }

    //returns first data in queue 
    //sets front of queue to null and sets the next front of queue 
    deque = () => {
        console.log(this.head, 26)
        if(this.head === this.tail){
            let data = this.queue[this.head]
            this.head = null;
            this.tail = null;
            console.log(data, 31)
            return data
        }else if(this.head === null){
            return false
        }else if(this.head === this.longth){
            let data = this.queue[this.head]
            this.queue[this.head] = null
            this.head = 0
            console.log(data, 38)
            return data
        }
        else{
            let data = this.queue[this.head]
            this.queue[this.head] = null
            this.head++
            console.log(data, 44)
            return data
        }
    }

    //shows the last data in the queue
    last = () => {
        console.log(this.tail);
        console.log(this.queue[this.tail]);
        return this.queue[this.tail]
    }
}

//testing callbackfunctions aswell
function alex(n){
    console.log(1+n, 57)
}

let a  = new Queue(3);
a.enque(alex);
a.enque(alex);
a.enque("hi");
console.log(a.queue, 61);
a.deque()(8);
console.log(a.queue, 63);
a.deque()(9);
console.log(a.show(), 65);
a.enque("yolo");
a.last();
console.log(a.show(), 65);
a.deque();
a.last()
console.log(a.show(), 85)
