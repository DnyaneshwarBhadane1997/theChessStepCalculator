
const chessItem =   require('../ChessItems');
const helper =  require('../helper');
helperObj = new  helper();
class queen extends chessItem {

    calculateNextSteps()
    {
        let location ={
            row: this.possition.row,
            column:this.possition.column
        }
        helperObj.parseLocation(location);
        let locationList = helperObj.getStreghtMoverLocation(true,false,location,false );
        locationList.push(...helperObj.getCrossMoverLocation(location,true));
        console.log(locationList);
        
    }
}
module.exports = queen;