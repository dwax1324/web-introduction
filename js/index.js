



window.onload = function () {
    const button = document.querySelector(".register")
    button.addEventListener("click", (e) => {
        const name = document.querySelector(".name")
        const inputs = document.querySelectorAll(".checkboxs")
        let count = 0;
        for (let i = 0; i < inputs.length; i++) {
            console.log(inputs[i].checked)
            if (inputs[i].checked) {
                count++;
            }
        }
        let message = name.value + '님!\n' + "아쉽네요! 다음 기회에..."
        if (count > 0) {
            message =
                name.value + '님!\n' +
                '저와 영화 취향이' + count + '개나 같군요!!\n' +
                '커피챗 해요^^'
        }
        if (count === 5) {
            message =
                name.value + '님!\n' +
                '저와 영화 취향이' + count + '개나 같군요!!\n' +
                '천생연분인데요?'
        }
        alert(message)
    });
}
