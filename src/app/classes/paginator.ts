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
                if(this.offset + this.limit <= this.count){
                    this.offset += this.limit;
                }
                break;
            case('previous'):
                if(this.offset - this.limit >= 0){
                    this.offset = this.offset - this.limit;
                }
                break;
            case('current'):
                break;
            default:
                return;
        }

        console.log(this.offset);
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
