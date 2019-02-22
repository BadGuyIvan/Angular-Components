
export class Message {
    content: string;
    id: String;
    
    guid() {
        return "ss-s-s-s-sss".replace(/s/g, this.s4);
      }
      
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }

    constructor(content){
        this.content = content;
        this.id = this.guid();
    }
}