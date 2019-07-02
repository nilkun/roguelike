export default class Info {
    constructor() {
        this.stats = [];
        this.messages = [];
    }

    updateMessages(msg) {
        // let html = "";
        // for(let i = this.messages.length; i >= 0; i--) {
        //     html += this.messages[i]
        // }
        const messagebox = document.createElement("p");
        const node = document.createTextNode(msg);
        messagebox.appendChild(node)
        const parent = document.querySelector(".messagebox");
        parent.insertBefore(messagebox, parent.childNodes[0]);
        if(parent.childElementCount > 12) parent.removeChild(parent.lastChild);
        // console.log
    }
    updateStats() {

    }

    addMessage(msg = "test message") {
        // this.messages.push(msg);
        // if(this.messages.length > 10) this.messages.shift();
        this.updateMessages(msg);
    }
}