

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


const _questions= [{
    letter: 'a',
    question: 'welk fruit begint met de letter A?',
    answers:
        [
            { foto: 'appel', link: 'photos/appel.png', correct: true },
            { foto: 'banaan', link: 'photos/banaan.png', correct: false },
            { foto: 'druiven', link: 'photos/druiven.png', correct: false },
            { foto: 'watermeloen', link: 'photos/watermeloen.png', correct: false }
        ]
},
{
    letter: 'b',
    question: 'welk fruit begint met de letter B?',
    answers:
        [
            { foto: 'appel', link: 'photos/appel.png', correct: false },
            { foto: 'banaan', link: 'photos/banaan.png', correct: true },
            { foto: 'druiven', link: 'photos/druiven.png', correct: false },
            { foto: 'watermeloen', link: 'photos/watermeloen.png', correct: false }

        ]
},
{
    letter: 'd',
    question: 'welk fruit begint met de letter D?',
    answers:
        [
            { foto: 'appel', link: 'photos/appel.png', correct: false },
            { foto: 'banaan', link: 'photos/banaan.png', correct: false },
            { foto: 'druiven', link: 'photos/druiven.png', correct: true },
            { foto: 'watermeloen', link: 'photos/watermeloen.png', correct: false },
        ]
},
{
    letter: 'w',
    question:'welk fruit begint met de letter W?' ,
    answers:
    [
        { foto: 'appel', link: 'photos/appel.png', correct: false },
        { foto: 'banaan', link: 'photos/banaan.png', correct: false },
        { foto: 'druiven', link: 'photos/druiven.png', correct: false },
        { foto: 'watermeloen', link: 'photos/watermeloen.png', correct: true },

    ]
},
{
    letter: 'a',
    question:'welk speelgoed begint met de letter A?' ,
    answers:
    [
        { foto: 'autootje', link: 'photos/autootje.png', correct: true },
        { foto: 'telefoon', link: 'photos/telefoon.png', correct: false },
        { foto: 'beer', link: 'photos/beer.png', correct: false },
        { foto: 'fiets', link: 'photos/fiets.png', correct: false },

    ]
},
{
    letter: 'k',
    question:'welk dier begint met de letter K?' ,
    answers:
    [
        { foto: 'kikker', link: 'photos/kikker.png', correct: true },
        { foto: 'poes', link: 'photos/poes.png', correct: false },
        { foto: 'rat', link: 'photos/rat.png', correct: false },
        { foto: 'vis', link: 'photos/vis.png', correct: false },

    ]
},
{
    letter: 's',
    question:'welk dier begint met de letter S?' ,
    answers:
    [
        { foto: 'slang', link: 'photos/slang.png', correct: true },
        { foto: 'poes', link: 'photos/poes.png', correct: false },
        { foto: 'rat', link: 'photos/rat.png', correct: false },
        { foto: 'vis', link: 'photos/vis.png', correct: false },  

    ]
},
{
    letter: 'i',
    question:'welk dier begint met de letter I?' ,
    answers:
    [
        { foto: 'inktvis', link: 'photos/inktvis.png', correct: true },
        { foto: 'poes', link: 'photos/poes.png', correct: false },
        { foto: 'rat', link: 'photos/rat.png', correct: false },
        { foto: 'vis', link: 'photos/vis.png', correct: false },

    ]
},
{
    letter: 'b',
    question:'welk speelgoed begint met de letter B?' ,
    answers:
    [
        { foto: 'fiets', link: 'photos/fiets.png', correct: false },
        { foto: 'beer', link: 'photos/beer.png', correct: true },
        { foto: 'telefoon', link: 'photos/telefoon.png', correct: false },
        { foto: 'autootje', link: 'photos/autootje.png', correct: false },

    ]
},
{
    letter: 'e',
    question:'welk dier begint met de letter E?' ,
    answers:
    [
        { foto: 'ezel', link: 'photos/ezel.png', correct: true },
        { foto: 'poes', link: 'photos/poes.png', correct: false },
        { foto: 'rat', link: 'photos/rat.png', correct: false },
        { foto: 'vis', link: 'photos/vis.png', correct: false },

    ]
},
{
    letter: 'j',
    question:'welk plaatje begint met de letter J?' ,
    answers:
    [
        { foto: 'jongen', link: 'photos/jongen.png', correct: true },
        { foto: 'huis', link: 'photos/huis.png', correct: false },
        { foto: 'stoel', link: 'photos/stoel.png', correct: false },
        { foto: 'tafel', link: 'photos/tafel.png', correct: false },

    ]
},
{
    letter: 'p',
    question:'welk dier begint met de letter P?' ,
    answers:
    [
        { foto: 'kikker', link: 'photos/kikker.png', correct: false },
        { foto: 'poes', link: 'photos/poes.png', correct: true },
        { foto: 'rat', link: 'photos/rat.png', correct: false },
        { foto: 'vis', link: 'photos/vis.png', correct: false },

    ]
},
{
    letter: 'r',
    question:'welk dier begint met de letter R?' ,
    answers:
    [
        { foto: 'kikker', link: 'photos/kikker.png', correct: false },
        { foto: 'poes', link: 'photos/poes.png', correct: false },
        { foto: 'rat', link: 'photos/rat.png', correct: true },
        { foto: 'vis', link: 'photos/vis.png', correct: false },
    ]
},
{
    letter: 's',
    question:'welke foto begint met de letter S?' ,
    answers:
    [
        { foto: 'jongen', link: 'photos/jongen.png', correct: false },
        { foto: 'huis', link: 'photos/huis.png', correct: false },
        { foto: 'stoel', link: 'photos/stoel.png', correct: true },
        { foto: 'tafel', link: 'photos/tafel.png', correct: false },

    ]
},
{
    letter: 'h',
    question:'welke foto begint met de letter H?' ,
    answers:
    [
        { foto: 'jongen', link: 'photos/jongen.png', correct: false },
        { foto: 'huis', link: 'photos/huis.png', correct: true },
        { foto: 'stoel', link: 'photos/stoel.png', correct: false },
        { foto: 'tafel', link: 'photos/tafel.png', correct: false },

    ]
},
{
    letter: 'm',
    question:'welke foto begint met de letter M?' ,
    answers:
    [
        { foto: 'meisje', link: 'photos/meisje.png', correct: true },
        { foto: 'huis', link: 'photos/huis.png', correct: false },
        { foto: 'stoel', link: 'photos/stoel.png', correct: false },
        { foto: 'tafel', link: 'photos/tafel.png', correct: false },
    ]
},
{
    letter: 't',
    question:'welke foto begint met de letter T?' ,
    answers:
    [
        { foto: 'jongen', link: 'photos/jongen.png', correct: false },
        { foto: 'huis', link: 'photos/huis.png', correct: false },
        { foto: 'stoel', link: 'photos/stoel.png', correct: false },
        { foto: 'tafel', link: 'photos/tafel.png', correct: true },

    ]
},
{
    letter: 'g',
    question:'welk dier begint met de letter G?' ,
    answers:
    [
        { foto: 'giraf', link: 'photos/giraf.png', correct: true },
        { foto: 'poes', link: 'photos/poes.png', correct: false },
        { foto: 'rat', link: 'photos/rat.png', correct: false },
        { foto: 'vis', link: 'photos/vis.png', correct: false },

    ]
},
{
    letter: 'v',
    question:'welk dier begint met de letter V?' ,
    answers:
    [
        { foto: 'kikker', link: 'photos/kikker.png', correct: false },
        { foto: 'poes', link: 'photos/poes.png', correct: false },
        { foto: 'rat', link: 'photos/rat.png', correct: false },
        { foto: 'vogel', link: 'photos/vogel.png', correct: true },

    ]
},
{
    letter: 's',
    question:'welk plaatje begint met de letter S?' ,
    answers:
    [
        { foto: 'jongen', link: 'photos/jongen.png', correct: false },
        { foto: 'huis', link: 'photos/huis.png', correct: false },
        { foto: 'schoen', link: 'photos/schoen.png', correct: true },
        { foto: 'tafel', link: 'photos/tafel.png', correct: false },


    ]
},
{
    letter: 'r',
    question:'welk plaatje begint met de letter R?' ,
    answers:
    [
        { foto: 'jongen', link: 'photos/jongen.png', correct: false },
        { foto: 'huis', link: 'photos/huis.png', correct: false },
        { foto: 'stoel', link: 'photos/stoel.png', correct: false },
        { foto: 'rok', link: 'photos/rok.png', correct: true },


    ]
},
{
    letter: 'b',
    question:'welk plaatje begint met de letter B?' ,
    answers:
    [
        { foto: 'jongen', link: 'photos/jongen.png', correct: false },
        { foto: 'huis', link: 'photos/huis.png', correct: false },
        { foto: 'stoel', link: 'photos/stoel.png', correct: false },
        { foto: 'boom', link: 'photos/boom.png', correct: true },

    ]
},
{
    letter: 'h',
    question:'welk dier begint met de letter H?' ,
    answers:
    [
        { foto: 'kikker', link: 'photos/kikker.png', correct: false },
        { foto: 'hond', link: 'photos/hond.png', correct: true },
        { foto: 'rat', link: 'photos/rat.png', correct: false },
        { foto: 'vogel', link: 'photos/vogel.png', correct: false },


    ]
},
{
    letter: 't',
    question:'welk speelgoed begint met de letter T?' ,
    answers:
    [
        { foto: 'fiets', link: 'photos/fiets.png', correct: false },
        { foto: 'telefoon', link: 'photos/telefoon.png', correct: true },
        { foto: 'telefoon', link: 'photos/telefoon.png', correct: false },
        { foto: 'autootje', link: 'photos/autootje.png', correct: false },

    ]
},
{
    letter: 'v',
    question:'welk dier begint met de letter V?' ,
    answers:
    [
        { foto: 'kikker', link: 'photos/kikker.png', correct: false },
        { foto: 'hond', link: 'photos/hond.png', correct: false },
        { foto: 'rat', link: 'photos/rat.png', correct: false },
        { foto: 'vis', link: 'photos/vis.png', correct: true },


    ]
},
{
    letter: 'b',
    question:'welk plaatje begint met de letter B?' ,
    answers:
    [
        { foto: 'jongen', link: 'photos/jongen.png', correct: false },
        { foto: 'huis', link: 'photos/huis.png', correct: false },
        { foto: 'stoel', link: 'photos/stoel.png', correct: false },
        { foto: 'broek', link: 'photos/broek.png', correct: true },


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

    'welk fruit begint met de letter D?': {
        link: 'audio\\voice\\Fruit letter D.m4a'
    },
    'welk fruit begint met de letter W?': {
        link: 'audio\\voice\\Fruit letter W.m4a'
    },
    'welk speelgoed begint met de letter A?': {
        link: 'audio\\voice\\Speelgoed letter A.m4a'
    },
    'welk dier begint met de letter K?': {
        link: 'audio\\voice\\Dier letter K.m4a'
    },
    'welk dier begint met de letter S?': {
        link: 'audio\\voice\\Dier letter S.m4a'
    },
    'welk dier begint met de letter I?': {
        link: 'audio\\voice\\Dier letter I.m4a'
    },
    'welk speelgoed begint met de letter B?': {
        link: 'audio\\voice\\Speelgoed letter B.m4a'
    },
    'welk dier begint met de letter E?': {
        link: 'audio\\voice\\Dier letter E.m4a'
    },
    'welk plaatje begint met de letter J?': {
        link: 'audio\\voice\\Plaatje letter J.m4a'
    },
    'welk dier begint met de letter P?': {
        link: 'audio\\voice\\Dier letter P.m4a'
    },
    'welk dier begint met de letter R?': {
        link: 'audio\\voice\\Dier letter R.m4a'
    },
    'welk foto begint met de letter S?': {
        link: 'audio\\voice\\Plaatje letter S.m4a'
    },
    'welk foto begint met de letter H?': {
        link: 'audio\\voice\\Plaatje letter H.m4a'
    },
    'welk foto begint met de letter M?': {
        link: 'audio\\voice\\Plaatje letter M.m4a'
    },
    'welk foto begint met de letter T?': {
        link: 'audio\\voice\\Plaatje letter T.m4a'
    },  
   
    'welk dier begint met de letter G?': {
        link: 'audio\\voice\\Dier letter G.m4a'
    },
    'welk dier begint met de letter V?': {
        link: 'audio\\voice\\Dier letter V.m4a'
    },
   
    'welk plaatje begint met de letter S?': {
        link: 'audio\\voice\\Plaatje letter S.m4a'
    },
    'welk plaatje begint met de letter R?': {
        link: 'audio\\voice\\Plaatje letter R.m4a'
    },
    'welk plaatje begint met de letter B?': {
        link: 'audio\\voice\\Plaatje letter B.m4a'
    },
    'welk dier begint met de letter H?': {
        link: 'audio\\voice\\Dier letter H.m4a'
    },
    'welk speelgoed begint met de letter T?': {
        link: 'audio\\voice\\Speelgoed letter T.m4a'
    },
    'welk dier begint met de letter V?': {
        link: 'audio\\voice\\Dier letter V.m4a'
    },
    'welk plaatje begint met de letter B?': {
        link: 'audio\\voice\\Plaatje letter B.m4a'
    },

    
}