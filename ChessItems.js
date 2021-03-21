
class chessItems {
    static chessItemList  =  [ "PAWN" ,"KING", "QUEEN" , "ROOK" ,"BISHOP"  ,"KNIGHT"]; 
    constructor(type,possition){
            this.type =type;
            this.possition = possition;
            
    }
    printLocation(){
        console.log("PrintThis location", this.possition);
    }
    
}


module.exports = chessItems;
