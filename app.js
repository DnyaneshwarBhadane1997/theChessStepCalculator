const helperClass = require('./helper'),
 chessItems = require('./ChessItems'),
 pawn = require('./items/pawn'),
 bishop = require('./items/bishop'),
 rook = require('./items/rook'),
 knight = require('./items/knight'),
 king = require('./items/king'),
 queen = require('./items/queen'),
 game = require('./game');


 let helperObject = new helperClass(),
itemType = process.argv[2].toUpperCase(),
location = process.argv[3].toUpperCase();

if (! helperObject.inputValidation(itemType, location)) {
    console.log("Invalid input in item typpe");
    return;
}
switch (itemType.toUpperCase()) {
    case chessItems.chessItemList[0]:
        let pawnObj = new pawn(itemType, {
            row: location[1],
            column: location[0]
        });
        pawnObj.calculateNextSteps();
        break;
    case chessItems.chessItemList[1]:
        let kingObj = new king(itemType, {
            row: location[1],
            column: location[0]
        });
        kingObj.calculateNextSteps();
        break;
    case chessItems.chessItemList[2]:
        let queenObj = new queen(itemType, {
            row: location[1],
            column: location[0]
        });
        queenObj.calculateNextSteps();
        break;
    case chessItems.chessItemList[3]:
        let rookObj = new rook(itemType, {
            row: location[1],
            column: location[0]
        });
        rookObj.calculateNextSteps();
        break;
    case chessItems.chessItemList[4]:
        let bishopObj = new bishop(itemType, {
            row: location[1],
            column: location[0]
        });
        bishopObj.calculateNextSteps();

        break;
    case chessItems.chessItemList[5]:
        {
            let knightObj = new knight(itemType, {
                row: location[1],
                column: location[0]
            });
            knightObj.calculateNextSteps();
        }
        break;
    default:
        break;
}

