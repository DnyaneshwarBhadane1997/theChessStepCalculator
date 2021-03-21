
const chessItem =   require('../ChessItems');
const helper =  require('../helper');
helperObj = new  helper();
class rook extends chessItem {

    calculateNextSteps()
    {
        let location ={
            row: this.possition.row,
            column:this.possition.column
        }
        helperObj.parseLocation(location);
        let locationList = helperObj.getStreghtMoverLocation(false,true,location,false );
        console.log(locationList);
    }
}
module.exports = rook;