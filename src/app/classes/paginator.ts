export class Paginator {

    //data in its entirety
    dataset: any[];
    //data that should be displayed
    pageData: any[];
    //size of the data array
    count: number;
    //index in dataset of the first element in pageData
    offset: number;
    //how many elements should be in pageData
    limit: number;

    constructor(dataset: any[], pageData: any[], count: number, offset: number, limit: number){
        this.dataset = dataset;
        this.pageData = pageData;
        this.count = count;
        this.offset = offset;
        this.limit = limit;
    }

    getPage(action: string){
        //specify if we should move ahead or backwards in the data array
        switch(action){
            case('next'):
            //guarantees we are inside the boundaries of the array
                if(this.offset + this.limit < this.count){
                    this.offset += this.limit;
                }
                else {
                    this.offset = this.limit*Math.floor(this.count/this.limit)
                }
                break;
            case('previous'):
            //guarantees we are inside the boundaries of the array
                if(this.offset - this.limit >= 0){
                    this.offset = this.offset - this.limit;
                }
                else {
                    this.offset = 0
                }
                break;
            case('current'):
            //guarantees we are inside the boundaries of the array
                if(this.offset + this.limit >= this.count){
                    this.offset = this.limit*Math.floor(this.count/this.limit)
                }
                if(this.offset - this.limit < 0){
                    this.offset = 0
                }
                break;
            case('first'):
            //go to the first possible page
                this.offset = 0
                break;
            case('last'):
            //go to the last possible page
                this.offset = this.limit*Math.floor(this.count/this.limit)
                break;
            default:
                return;
        }

        //empties the pageData array to use new data
        while(this.pageData.length > 0){
            this.pageData.pop();
        }
        //fills pageData with the desired data
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
