const memes = [
    { name: "1", imageUrl: "1" },
    { name: "2", imageUrl: "2" },
    { name: "3", imageUrl: "3" },
]

export function getRandomMeme() {
    return memes[Math.floor(Math.random() * memes.length)];
}