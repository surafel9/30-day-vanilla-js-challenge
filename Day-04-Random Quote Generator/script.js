'Use strict';

const quotes = [
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: 'Cory House',
  },
  {
    text: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson',
  },
  {
    text: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    author: 'Harold Abelson',
  },
  { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  {
    text: 'Experience is the name everyone gives to their mistakes.',
    author: 'Oscar Wilde',
  },
  { text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
  {
    text: 'Clean code always looks like it was written by someone who cares.',
    author: 'Robert C. Martin',
  },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler',
  },
  { text: 'Code more, worry less.', author: 'Unknown' },
  {
    text: 'It’s not about ideas. It’s about making ideas happen.',
    author: 'Scott Belsky',
  },
  { text: 'Your only limit is your mind.', author: 'Anonymous' },
  {
    text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  { text: 'Stay hungry, stay foolish.', author: 'Steve Jobs' },
  {
    text: 'Don’t let yesterday take up too much of today.',
    author: 'Will Rogers',
  },
  { text: 'Dream big, start small, act now.', author: 'Robin Sharma' },
  {
    text: 'Push yourself, because no one else is going to do it for you.',
    author: 'Unknown',
  },
  {
    text: 'Failure is not the opposite of success; it’s part of success.',
    author: 'Arianna Huffington',
  },
  { text: 'Learn to rest, not quit.', author: 'Banksy' },
  {
    text: 'The best way to predict the future is to create it.',
    author: 'Peter Drucker',
  },
  {
    text: 'You don’t have to be great to start, but you have to start to be great.',
    author: 'Zig Ziglar',
  },
  {
    text: 'If opportunity doesn’t knock, build a door.',
    author: 'Milton Berle',
  },
  { text: 'Mistakes are proof that you are trying.', author: 'Jennifer Lim' },
  {
    text: 'Great things never come from comfort zones.',
    author: 'Neil Strauss',
  },
  {
    text: 'Small progress every day adds up to big results.',
    author: 'Satya Nani',
  },
  {
    text: 'Don’t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson',
  },
  {
    text: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'Hard work beats talent when talent doesn’t work hard.',
    author: 'Tim Notke',
  },
  {
    text: 'Discipline is the bridge between goals and accomplishment.',
    author: 'Jim Rohn',
  },
  {
    text: 'Perseverance is not a long race; it is many short races one after the other.',
    author: 'Walter Elliot',
  },
  {
    text: 'The secret of getting ahead is getting started.',
    author: 'Mark Twain',
  },
  {
    text: 'Success usually comes to those who are too busy to be looking for it.',
    author: 'Henry David Thoreau',
  },
  {
    text: 'If you really look closely, most overnight successes took a long time.',
    author: 'Steve Jobs',
  },
  {
    text: 'Try not to become a man of success. Rather become a man of value.',
    author: 'Albert Einstein',
  },
  {
    text: 'Don’t be afraid to give up the good to go for the great.',
    author: 'John D. Rockefeller',
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: 'Chris Grosser',
  },
  {
    text: 'Success seems to be connected with action. Successful people keep moving.',
    author: 'Conrad Hilton',
  },
  {
    text: 'Don’t be afraid to start over. This time you’re not starting from scratch, you’re starting from experience.',
    author: 'Unknown',
  },
  { text: 'Code never lies, comments sometimes do.', author: 'Ron Jeffries' },
  {
    text: 'Programs are meant to be read by humans and only incidentally for computers to execute.',
    author: 'Donald Knuth',
  },
  {
    text: 'The computer was born to solve problems that did not exist before.',
    author: 'Bill Gates',
  },
  {
    text: 'The function of good software is to make the complex appear simple.',
    author: 'Grady Booch',
  },
  {
    text: 'Any sufficiently advanced bug is indistinguishable from a feature.',
    author: 'Rich Kulawiec',
  },
  {
    text: 'First, learn computer science and all the theory. Next, develop a programming style. Then forget all that and just hack.',
    author: 'George Carrette',
  },
  {
    text: 'Software is a great combination between artistry and engineering.',
    author: 'Bill Gates',
  },
  {
    text: 'The most disastrous thing you can ever learn is your first programming language.',
    author: 'Alan Kay',
  },
  {
    text: 'Good code is its own best documentation.',
    author: 'Steve McConnell',
  },
  {
    text: 'A good programmer is someone who always looks both ways before crossing a one-way street.',
    author: 'Doug Linder',
  },
  {
    text: 'Walking on water and developing software from a specification are easy if both are frozen.',
    author: 'Edward V. Berard',
  },
  {
    text: 'In order to be irreplaceable, one must always be different.',
    author: 'Coco Chanel',
  },
  {
    text: 'When you want something, all the universe conspires in helping you to achieve it.',
    author: 'Paulo Coelho',
  },
];

const randome = Math.floor(Math.random() * quotes.length);

console.log(quotes[randome]);
document.querySelector('#quote').textContent = quotes[randome].text;
document.querySelector('#author').textContent = quotes[randome].author;

const newQuotes = document.querySelector('#new-quote-btn');

newQuotes.addEventListener('click', function () {
  window.location.reload(true);
});

const copyButton = document.querySelector('#copy-btn');

copyButton.addEventListener('click', function () {
  navigator.clipboard.writeText(document.getElementById('quote').textContent);
});
