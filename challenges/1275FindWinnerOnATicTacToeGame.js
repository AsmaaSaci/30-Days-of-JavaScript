var tictactoe = function(moves) {
    let board = Array.from({length: 3}, () => Array(3).fill(''));
    for (let i = 0; i < moves.length; i++) {
        let [r, c] = moves[i];
        board[r][c] = i % 2 === 0 ? 'A' : 'B';
    }
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return board[i][0];
        if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return board[0][i];
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0];
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[0][2];
    return moves.length === 9 ? "Draw" : "Pending";
};
