export class Paginator {

    dataset: any[];
    pageData: any[];
    count: number;
    offset: number;
    limit: number;

    constructor(dataset: any[], pageData: any[], count: number, offset: number, limit: number){
        this.dataset = dataset;
        this.pageData = pageData;
        this.count = count;
        this.offset = offset;
        this.limit = limit;
    }

    getPage(action: string){
        switch(action){
            case('next'):
                if(this.offset + this.limit < this.count){
                    this.offset += this.limit;
                }
                else {
                    this.offset = this.limit*Math.floor(this.count/this.limit)
                }
                break;
            case('previous'):
                if(this.offset - this.limit >= 0){
                    this.offset = this.offset - this.limit;
                }
                else {
                    this.offset = 0
                }
                break;
            case('current'):
                if(this.offset + this.limit >= this.count){
                    this.offset = this.limit*Math.floor(this.count/this.limit)
                }
                if(this.offset - this.limit < 0){
                    this.offset = 0
                }
                break;
            case('first'):
                this.offset = 0
                break;
            case('last'):
                this.offset = this.limit*Math.floor(this.count/this.limit)
                break;
            default:
                return;
        }

        while(this.pageData.length > 0){
            this.pageData.pop();
        }
        for(let i = 0; i < this.limit; i++){
            if(this.offset + i < this.dataset.length ){
                this.pageData.push(this.dataset[this.offset + i])
            }
        }
        return this.pageData;  
    }

    getOffset(){
        return this.offset;
    }

}
