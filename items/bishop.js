
const chessItem =   require('../ChessItems');
const helper =  require('../helper');
helperObj = new  helper();
class bishop extends chessItem {

    calculateNextSteps()
    {
        let location ={
            row: this.possition.row,
            column:this.possition.column
        }
        helperObj.parseLocation(location);
        let locationList = helperObj.getCrossMoverLocation(location,true);
        console.log(locationList);
    }
}
module.exports = bishop;