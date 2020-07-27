class Mobile {
    constructor(name) {
        this.name = name;
        this.mess = "";
        this.MessInput = [];
        this.MessOutput = [];
        this.status = true;

    }

    writeMess(value){
        this.mess = value;
    }
    receiveMess(value){
        this.MessInput.push(value);
    }
    sendMess (mobile){
        this.MessOutput.push(this.mess);
        mobile.receiveMess(this.mess);
    }
}