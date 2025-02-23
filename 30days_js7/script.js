document.addEventListener("DOMContentLoaded", () => {
        const quoteText = document.querySelector(".quote-box blockquote");
        const quoteAuthor = document.querySelector(".quote-box span");
        const newQuoteButton = document.querySelector(".quote-box button:first-child");
        const tweetButton = document.querySelector(".quote-box button:last-child");
    
        async function fetchQuote() {
            try {
                // Fetch quotes from the API
                const response = await fetch("https://type.fit/api/quotes");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const quotes = await response.json();
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
                // Update the quote and author
                quoteText.textContent = randomQuote.text || "Unknown quote";
                quoteAuthor.textContent = randomQuote.author || "Unknown author";
            } catch (error) {
                console.error("Error fetching quote:", error);
    
                // Fallback message
                quoteText.textContent = "Sorry, we couldn't load a new quote at this time.";
                quoteAuthor.textContent = "";
            }
        }
    
        newQuoteButton.addEventListener("click", fetchQuote);
    
        tweetButton.addEventListener("click", () => {
            const text = encodeURIComponent(`"${quoteText.textContent}" - ${quoteAuthor.textContent}`);
            const twitterUrl = `https://twitter.com/intent/tweet?text=${text}`;
            window.open(twitterUrl, "_blank");
        });
    
        // Fetch the first quote when the page loads
        fetchQuote();
    });
    