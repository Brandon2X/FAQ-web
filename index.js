function toggleAnswer(questionNumber) {
    var answerElement = document.getElementById('answer' + questionNumber);
    var toggleIcon = document.getElementById('toggle-icon-' + questionNumber);

    if (answerElement.style.display === 'none' || answerElement.style.display === '') {
        answerElement.style.display = 'block';
        toggleIcon.src = 'minus.png';
    } else {
        answerElement.style.display = 'none';
        toggleIcon.src = 'plus.png';
    }
}










