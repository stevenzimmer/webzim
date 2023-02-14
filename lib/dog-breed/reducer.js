export default function ourReducer(draft, action) {
    if (draft.points > draft.highScore) draft.highScore = draft.points;
    switch (action.type) {
        case "receiveHighScore":
            draft.highScore = action.value;
            if (!action.value) draft.highScore = 0;
            return;

        case "decreaseTime":
            if (draft.timeRemaining <= 0) {
                draft.playing = false;
            } else {
                draft.timeRemaining--;
            }

            return;
        case "guessAttempt":
            if (!draft.playing) return;
            if (action.value === draft.currentQuestion.answer) {
                draft.points++;
                draft.inARow++;
                draft.currentQuestion = generateQuestion();
            } else {
                draft.strikes++;
                draft.inARow = 0;
                if (draft.strikes >= 3) {
                    draft.playing = false;
                }
            }
            if (draft.inARow === 3) {
                draft.timeRemaining = draft.timeRemaining + 5;
                draft.inARow = 0;
            }

            // console.log(draft.inARow);
            return;
        case "addToCollection":
            // console.log("add to collection");
            draft.bigCollection = draft.bigCollection.concat(action.value);
            return;
        case "startPlaying":
            draft.points = 0;
            draft.timeRemaining = 30;
            draft.strikes = 0;
            draft.playing = true;
            draft.currentQuestion = generateQuestion();
            return;
    }

    function generateQuestion() {
        if (draft.bigCollection.length <= 12) {
            draft.fetchCount++;
        }
        if (draft.currentQuestion) {
            draft.bigCollection = draft.bigCollection.slice(
                4,
                draft.bigCollection.length
            );
        }
        const tempRandom = Math.floor(Math.random() * 4);
        const justFour = draft.bigCollection.slice(0, 4);
        return {
            breed: justFour[tempRandom].split("/")[4],
            photos: justFour,
            answer: tempRandom,
        };
    }
}
