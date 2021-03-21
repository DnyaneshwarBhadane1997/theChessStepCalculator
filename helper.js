let chessItems = require('./ChessItems');
const LAST_RANGE = 8;
const characterArrayList = ['A','B','C','D','E','F','G','H'];
class helperClass {
 
    inputValidation(itemType, location) {
        location = location.toString().toUpperCase();
        itemType = itemType.toString().toUpperCase();
        if (chessItems.chessItemList.indexOf(itemType) == -1 || location.length > 2) {
            return false;
        }
        location = {
            row: location[1],
            column: location[0]
        }
        if (location.row == 0 || location.row > 8 || !(location.column >= 'A' && location.column <= 'H')) {
            return false;
        }
        return true;
    }
    parseLocation(location){
        location.row =  location.row.charCodeAt() - 49;
        location.column =  location.column.charCodeAt() - 65;
        return location;
    }
    parseToChessGameLocation(locationList){

        locationList.map((location)=>{
                location.row = location.row+1;
                location.column = characterArrayList[location.column]; 
        })
        let combinedLocationList =[]
        locationList.forEach(element => {
            combinedLocationList.push(element.column+element.row);
        }); 
        return combinedLocationList;
    }
    getStreghtMoverLocation( isBackMoveAllow , isMoreThanOneSteps ,currLocation){
        let locationArray = [];
        if(isMoreThanOneSteps){
            for(let index= 0 ; index < LAST_RANGE ; index++ ){
                if(currLocation.row != index )
                locationArray.push({
                    column: currLocation.column,
                    row : index 
                })
                if(characterArrayList[currLocation.row] != index )
                {
                    locationArray.push({
                        column:index,
                        row : currLocation.row
                    })
                }
            }
            return this.parseToChessGameLocation(locationArray);
        }
        else{
            if(isBackMoveAllow){
                let locationArray =[];
                
                //next
                if(!((currLocation.row + 1) >= 8)){
                    locationArray.push({
                        column:currLocation.column,
                        row : currLocation.row+1
                    })
                }
                //back
                if(!((currLocation.row - 1) <= 0)){
                    locationArray.push({
                        column:currLocation.column,
                        row : currLocation.row-1
                    })
                }
                //left
                if(!((currLocation.column + 1 >= 8) )){
                    locationArray.push({
                        column:currLocation.column+1,
                        row : currLocation.row
                    })
                }
                //right
                if(!((currLocation.column -1 <= 0))){
                    locationArray.push({
                        column:currLocation.column-1,
                        row : currLocation.row
                    })
                }
                
                return this.parseToChessGameLocation(locationArray);
            }else{
                if((currLocation.row + 1) >= 8 ){
                    return this.parseToChessGameLocation([]);
                }else{
                    
                    currLocation.row = currLocation.row + 1;
                    
                    return this.parseToChessGameLocation([currLocation]);
                }
            }
          
        }
    }
    getCrossMoverLocation(currLocation, isMoreThanOneSteps ){
        
        let locationArray = [];
        let index = 1;
        while(true){
            let isPush = false;
         
            if(currLocation.row - index  > 0 && currLocation.column -index  > 0 ){
                locationArray.push({
                    row:currLocation.row -index,
                    column:currLocation.column -index
                })
                isPush =true;
            }
            if(currLocation.row -index  >0 && currLocation.column +index  < 8 ){
                locationArray.push({
                    row:currLocation.row -index ,
                    column: currLocation.column +index
                })
                isPush =true;
            }
            if(currLocation.row +index  < 8 && currLocation.column -index  > 0 ){
                locationArray.push({
                    row:currLocation.row +index ,
                    column:currLocation.column -index 
                })
                isPush =true;
            }
            if(currLocation.row +index  < 8 && currLocation.column +index  < 8 ){
                locationArray.push({
                    row:currLocation.row +index ,
                    column:currLocation.column +index 
                })
                isPush =true;
            }
            index++;
            if(!isPush || !isMoreThanOneSteps){
                break;
            }
        }
        return this.parseToChessGameLocation(locationArray);

        

    }
    getHalfManMoverRook(location){
        //forward
        const HORSE_STEP = 2;
        let locationArray= [];
        if(location.row + HORSE_STEP < LAST_RANGE){
            let tmpRow =location.row+HORSE_STEP;
            if( location.column + 1 < LAST_RANGE){
                locationArray.push({
                    row: tmpRow,
                    column : location.column+1
                })
            }
            if(location.column - 1 > 0){
                locationArray.push({
                    row: tmpRow,
                    column : location.column-1
                })
            }
        }
        //backword
        if(location.row - HORSE_STEP > LAST_RANGE){
            let tmpRow =location.row-HORSE_STEP;
            if( location.column + 1 < LAST_RANGE){
                locationArray.push({
                    row: tmpRow,
                    column : location.column + 1
                })
            }
            if(location.column - 1 > 0){
                locationArray.push({
                    row: tmpRow,
                    column : location.column-1
                })
            }
        }

        //left 
        if(location.column - HORSE_STEP > LAST_RANGE){
            let tmpColumn =location.column-HORSE_STEP;
            if( location.row + 1 < LAST_RANGE){
                locationArray.push({
                    column: tmpColumn,
                    row : location.row + 1
                })
            }
            if(location.row - 1 > 0){
                locationArray.push({
                    column: tmpColumn,
                    row : location.row-1
                })
            }
        }
        //right
        if(location.column + HORSE_STEP < LAST_RANGE){
            let tmpColumn =location.column+HORSE_STEP;
            if( location.row + 1 < LAST_RANGE){
                locationArray.push({
                    column: tmpColumn,
                    row : location.row + 1
                })
            }
            if(location.row - 1 > 0){
                locationArray.push({
                    column: tmpColumn,
                    row : location.row-1
                })
            }
        }
        return this.parseToChessGameLocation(locationArray);

    }
}
module.exports = helperClass;



