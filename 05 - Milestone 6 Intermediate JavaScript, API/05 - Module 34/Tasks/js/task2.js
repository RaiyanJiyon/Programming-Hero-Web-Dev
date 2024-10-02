const jokes = [
    'You’ve seen how crazy I am and you still choose to be my friend. Thanks for being the realest.',
    'You and I will be friends forever because at this point, you know too much.',
    'We’ve been friends for so long that I can’t recall who is the bad influence on who.',
    'I’m a mom, but my kids call me ‘MOM MOM MOM MOM.',
    'Sometimes I feel ugly. But then I look at my little brother and I get over it.',
    'In this family, crazy never skips a generation.'
]

const tellJokes = () => {
    let index = 0;
    const interval = setInterval(() => {
        console.log(jokes[index]);
        index = (index + 1) % jokes.length;
    }, 2000);

    setTimeout(() => {
        clearInterval(interval);
        console.log("Jokes message stops after 10 second");
    }, 10000);
}

tellJokes();