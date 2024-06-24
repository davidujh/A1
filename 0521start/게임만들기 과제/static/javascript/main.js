const cardImages = ["dummy1.png", "dummy2.png", "dummy3.png", "dummy4.png"];
let timeInterval;
let playMinute = 0;
let playSecond = 0;
let selectedCards = [];
let matchedCards = 0;

$(function() {
    $("#start").click(startGame);
    $("#restart").click(restartGame);
    $("#restart").attr("disabled", true);

    setupCards();
});

function startGame() {
    startTimer();
    $(".card").click(selectCard);
    $("#start").attr("disabled", true);
    $("#restart").attr("disabled", false);
}

function restartGame() {
    stopTimer();
    $(".card img").remove();
    $(".card").removeClass("click");
    selectedCards = [];
    matchedCards = 0;
    playMinute = 0;
    playSecond = 0;
    $("#start").attr("disabled", true);
    $("#restart").attr("disabled", false);
    setupCards();
    $("#playTime").text('00:00');
}

function startTimer() {
    stopTimer(); // Clear any existing interval
    timeInterval = setInterval(function() {
        playSecond++;
        if (playSecond === 60) {
            playSecond = 0;
            playMinute++;
        }
        var secondText = playSecond <= 9 ? '0' + playSecond : playSecond;
        var minuteText = playMinute <= 9 ? '0' + playMinute : playMinute;
        $("#playTime").text(`${minuteText}:${secondText}`);
    }, 1000);
}

function stopTimer() {
    clearInterval(timeInterval);
}

function selectCard() {
    if ($(this).hasClass("click") || selectedCards.length >= 2) {
        return;
    }

    $(this).addClass("click");
    $(this).find("img").css('display', 'block');
    selectedCards.push($(this));

    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const img1 = selectedCards[0].find("img").attr("src");
    const img2 = selectedCards[1].find("img").attr("src");

    if (img1 === img2) {
        matchedCards += 2;
        selectedCards = [];
        if (matchedCards === cardImages.length) {
            alert("모든 그림을 맞추셨습니다!");
            stopTimer();
        }
    } else {
        selectedCards[0].removeClass("click");
        selectedCards[1].removeClass("click");
        setTimeout(function() {
            selectedCards[0].find("img").css('display', 'none');
            selectedCards[1].find("img").css('display', 'none');
            selectedCards = [];
        }, 500); // Delay to show cards before hiding them
    }
}

function setupCards() {
    const images = cardImages.concat(cardImages); // Duplicate images for pairs
    images.sort(() => Math.random() - 0.5); // Shuffle images

    $(".card").each(function(index) {
        const $card = $(this);
        $card.append(`<img src="./static/image/${images[index]}" alt="card image">`);
        $card.append(`<div class="dummy-image"></div>`);
    });
}