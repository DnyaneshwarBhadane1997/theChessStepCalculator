const chessItem =   require('../ChessItems');
const helper =  require('../helper');
helperObj = new  helper();
class knight extends chessItem {

    calculateNextSteps()
    {
        let location ={
            row: this.possition.row,
            column:this.possition.column
        }
        helperObj.parseLocation(location);
        let locationList = helperObj.getHalfManMoverRook(location);
        console.log(locationList);
    }
}
module.exports = knight;