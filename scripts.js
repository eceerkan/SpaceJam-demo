document.addEventListener('DOMContentLoaded', function () {
    const selectedEmojisContainer = document.getElementById('selected-emojis');
    let selectedEmojis = ['', ''];

    function updateSelectedEmojis() {
        selectedEmojisContainer.textContent = selectedEmojis.join(' + ');
    }

    function selectEmoji(side, emoji) {
        const index = side === 'emoji-left' ? 0 : 1;
        selectedEmojis[index] = emoji.innerHTML;
        updateSelectedEmojis();
    }

    function restart() {
        selectedEmojis = ['', ''];
        updateSelectedEmojis();
    }

    const emojiElements = document.querySelectorAll('.emoji');
    emojiElements.forEach(function (emojiElement) {
        emojiElement.addEventListener('click', function () {
            const side = emojiElement.getAttribute('data-side');
            selectEmoji(side, emojiElement);
        });
    });
});
