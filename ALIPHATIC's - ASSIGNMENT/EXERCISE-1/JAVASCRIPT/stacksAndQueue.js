/**
 1. Implement a Stack using an Array
 2. Implement a Stack using a Linked List
 3. Implement a Queue using an Array
 4. Implement a Queue using a Linked List
 5. Implement a Queue using a Doubly Linked List
 */



// 1. Implement a Stack using an Array
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

// 2. Implement a Stack using a Linked List
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(element) {
        var node = new Node(element);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    pop() {
        if(this.head == null)
            return "Underflow";
        var temp = this.head;
        this.head = this.head.next;
        this.size--;
        return temp.element;
    }

    peek() {
        if(this.head == null)
            return "Underflow";
        return this.head.element;
    }

    isEmpty() {
        return this.head == null;
    }

    printStack() {
        var str = "";
        var temp = this.head;
        while(temp != null) {
            str += temp.element + " ";
            temp = temp.next;
        }
        return str;
    }
}

