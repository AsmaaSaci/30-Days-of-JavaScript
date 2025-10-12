let countBattleships = function (board) {
    let ships = 0;

    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[0].length; j++) {
            if (board[i][j] == ".") continue;
            let previousLeft = board[i]?.[j - 1] || ".";
            let previousUp = board[i - 1]?.[j] || ".";
            if (previousLeft == "X" || previousUp == "X") continue;
            ships++;
        }
    }

    return ships;
}
