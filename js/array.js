

const letters = {
    'a': { link: 'content\\clown-letter-a-wood.jpg' },
    'b': { link: 'content\\clown-letter-b-wood.jpg' },
    'c': { link: 'content\\clown-letter-c-wood.jpg' },
    'd': { link: 'content\\clown-letter-d-wood.jpg' },
    'e': { link: 'content\\clown-letter-e-wood.jpg' },
    'f': { link: 'content\\clown-letter-f-wood.jpg' },
    'g': { link: 'content\\clown-letter-g-wood.jpg' },
    'h': { link: 'content\\clown-letter-h-wood.jpg' },
    'i': { link: 'content\\clown-letter-i-wood.jpg' },
    'j': { link: 'content\\clown-letter-j-wood.jpg' },
    'k': { link: 'content\\clown-letter-k-wood.jpg' },
    'l': { link: 'content\\clown-letter-l-wood.jpg' },
    'm': { link: 'content\\clown-letter-m-wood.jpg' },
    'n': { link: 'content\\clown-letter-n-wood.jpg' },
    'o': { link: 'content\\clown-letter-o-wood.jpg' },
    'p': { link: 'content\\clown-letter-p-wood.jpg' },
    'q': { link: 'content\\clown-letter-q-wood.jpg' },
    'r': { link: 'content\\clown-letter-r-wood.jpg' },
    's': { link: 'content\\clown-letter-s-wood.jpg' },
    't': { link: 'content\\clown-letter-t-wood.jpg' },
    'u': { link: 'content\\clown-letter-u-wood.jpg' },
    'v': { link: 'content\\clown-letter-v-wood.jpg' },
    'w': { link: 'content\\clown-letter-w-wood.jpg' },
    'x': { link: 'content\\clown-letter-x-wood.jpg' },
    'y': { link: 'content\\clown-letter-y-wood.jpg' },
    'z': { link: 'content\\clown-letter-z-wood.jpg' }
}


const _questions = [
    {
        letter: 'a',
        question: 'welk fruit begint met de letter A?',
        answers:
            [
                { foto: 'appel', link: 'photos\\fotos\\appel.jpg', correct: true },
                { foto: 'banaan', link: 'photos\\fotos\\banaan.jpg', correct: false },
                { foto: 'druiven', link: 'photos\\fotos\\druiven.png', correct: false },
                { foto: 'watermeloen', link: 'photos\\fotos\\watermeloen.jpg', correct: false },

            ]
    },
    {
        letter: 'b',
        question: 'welk fruit begint met de letter B',
        answers:
            [
                { foto: 'appel', link: 'photos\\fotos\\appel.jpg', correct: false },
                { foto: 'banaan', link: 'photos\\fotos\\banaan.jpg', correct: true },
                { foto: 'druiven', link: 'photos\\fotos\\druiven.png', correct: false },
                { foto: 'watermeloen', link: 'photos\\fotos\\watermeloen.jpg', correct: false },

            ]
    },
    {
        letter: 'd',
        question: 'welk fruit begint met de letter D?',
        answers:
            [
                { foto: 'appel', link: 'photos\\fotos\\appel.jpg', correct: false },
                { foto: 'banaan', link: 'photos\\fotos\\banaan.jpg', correct: false },
                { foto: 'druiven', link: 'photos\\fotos\\druiven.png', correct: true },
                { foto: 'watermeloen', link: 'photos\\fotos\\watermeloen.jpg', correct: false },
            ]
    },

]

const voice = {

    'welk fruit begint met de letter A?': {
        link: 'audio\\voice\\Fruit letter A.m4a'
    },

    'welk fruit begint met de letter B?': {
        link: 'audio\\voice\\Fruit letter B.m4a'
    },
}