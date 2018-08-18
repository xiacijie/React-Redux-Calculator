class Stack{
    constructor(){
        this.content = [];
        this.size = 0;
    }

    isEmpty = () =>{
        return this.size == 0;
    }

    push = (ele) => {
        this.content.push(ele);
        this.size ++;
    }

    pop = () =>{
        if (this.size > 0){
            const ele = this.content.pop();
            this.size --;
            return ele;
        }
    }

    peek = () =>{
        if (this.size > 0){
            const ele = this.content[this.size-1];
            return ele;
        }
    }

    getSize = () =>{
        return this.size;
    }
}

export  default Stack;