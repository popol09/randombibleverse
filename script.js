const quotes = [
  {
    quote: "\"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.\"",
    author: "Jeremiah 29:11"
  },
  {
    quote: "\"I can do all things through Christ who strengthens me.\"",
    author: "Philippians 4:13"
  },
  {
    quote: "\"Trust in the Lord with all your heart and lean not on your own understanding.\"",
    author: "Proverbs 3:5"
  },
  {
    quote: "\"The Lord is my shepherd; I shall not want.\"",
    author: "Psalm 23:1"
  },
  {
    quote: "\"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.\"",
    author: "Isaiah 40:31"
  },
  {
    quote: "\"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.\"",
    author: "Joshua 1:9"
  },
  {
    quote: "\"And we know that in all things God works for the good of those who love him, who have been called according to his purpose.\"",
    author: "Romans 8:28"
  },
  {
    quote: "\"The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?\"",
    author: "Psalm 27:1"
  },
  {
    quote: "\"Cast all your anxiety on him because he cares for you.\"",
    author: "1 Peter 5:7"
  },
  {
    quote: "\"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.\"",
    author: "Philippians 4:6"
  },
  {
    quote: "\"Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'\"",
    author: "John 14:6"
  },
  {
    quote: "\"But seek first his kingdom and his righteousness, and all these things will be given to you as well.\"",
    author: "Matthew 6:33"
  },
  {
    quote: "\"The name of the Lord is a fortified tower; the righteous run to it and are safe.\"",
    author: "Proverbs 18:10"
  },
  {
    quote: "\"Come to me, all you who are weary and burdened, and I will give you rest.\"",
    author: "Matthew 11:28"
  },
  {
    quote: "\"Your word is a lamp for my feet, a light on my path.\"",
    author: "Psalm 119:105"
  },
  {
    quote: "\"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!\"",
    author: "2 Corinthians 5:17"
  },
  {
    quote: "\"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.\"",
    author: "John 3:16"
  },
  {
    quote: "\"The Lord is close to the brokenhearted and saves those who are crushed in spirit.\"",
    author: "Psalm 34:18"
  },
  {
    quote: "\"He gives strength to the weary and increases the power of the weak.\"",
    author: "Isaiah 40:29"
  }
]

const text = document.querySelector("#text")
const author = document.querySelector("#author")
const newQuote = document.querySelector("#new-quote")

newQuote.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * quotes.length)
  text.textContent = quotes[randomNum]["quote"]
  author.textContent = quotes[randomNum]["author"]
})

// Show a random verse on page load
window.addEventListener("DOMContentLoaded", () => {
  const randomNum = Math.floor(Math.random() * quotes.length)
  text.textContent = quotes[randomNum]["quote"]
  author.textContent = quotes[randomNum]["author"]
})
