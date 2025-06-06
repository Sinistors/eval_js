function randomRange(first, last) {
    return first + Math.floor(Math.random() * (last - first));
}

class Quote 
{
    text;
    author;
    type;
    constructor(text, author, type) 
    {
        this.text = text;
        this.author = author;
        this.type = type;
    }

    createQuoteElement(tagContainer)
    {
        //container parent
        let containerElement = document.createElement(tagContainer);
        containerElement.classList.add("quote");

        //author
        let authorElement = document.createElement("h3");
        authorElement.innerText = this.author;
        containerElement.append(authorElement);

        //Quote text
        let textElement = document.createElement("p");
        textElement.innerText = this.text;
        containerElement.append(textElement);

        //type
        switch (this.type) 
        {
            case "Politique":
                containerElement.classList.add("politic");
                break;
            case "Sportive":
                containerElement.classList.add("sports");
                break;
            case "Philosophique":
                containerElement.classList.add("philosophic");
                break;
        
            default:
                break;
        }

        //Delete button
        let buttonElement = document.createElement("button");
        buttonElement.innerText = "Supprimer";
        buttonElement.classList.add("btn");
        buttonElement.classList.add("btn-danger");
        buttonElement.addEventListener("click", (e) =>
        {
            e.target.parentElement.remove();
        });
        containerElement.append(buttonElement);

        return containerElement;
    }

    //Store quote in localstorage
    store()
    {
        let has = false;
        quotes.forEach(quote => 
        {
            if (quote.author == this.author && quote.text == this.text)
            {
                has = true;
            }
        });
        if (!has)
        {
            quotes.push(this);
            localStorage.setItem("quotes", JSON.stringify(quotes));
        }
    }
}

//Event add Quote
document.querySelector("#quote-form").addEventListener("submit", (e) =>
{
    e.preventDefault();
    let text = document.querySelector("#quote-text").value;
    let author = document.querySelector("#quote-author").value;
    let type = document.querySelector("#quote-type").value;
    
    if (text == "" || author == "" || type == "")
    {
        document.querySelector("#error-msg").innerText = "❌ Erreur veuillez remplir tous les champs";
    }
    else
    {
        document.querySelector("#error-msg").innerText = "";
        quote = new Quote(text, author, type);
        quote.store();
        document.querySelector("#quote-list").append(quote.createQuoteElement("li"));
    }
});

//Manage localStorage
//let quotes = []; localStorage.setItem("quotes", JSON.stringify(quotes));//TO EMPTY LOCAL STORAGE (COMMENT THE NEXT LINE ALSO)
let quotes = JSON.parse(localStorage.getItem("quotes"));
if (quotes.length == 0)
{
    quotes = new Array(0);
}
else
{
    let newQuotes = [];
    quotes.forEach(quote => 
    {
        newQuotes.push(new Quote(quote.text, quote.author, quote.type));
    });
    quotes = newQuotes;
}
let nbQuotesElement = document.createElement("p");
nbQuotesElement.innerText = "Nombre de citations enregistrées : " + quotes.length;
let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.insertAdjacentElement("beforebegin", nbQuotesElement);


//Daily quote
if (quotes.length > 0)
{
    //Container
    let dailyQuoteContainer = document.createElement("div");
    dailyQuoteContainer.classList.add("dailyQuoteContainer");

    //Title
    let dailyQuoteTitle = document.createElement("h2");
    dailyQuoteTitle.innerText = "Citation du jour";
    dailyQuoteContainer.append(dailyQuoteTitle);

    //Random quote frome localstorage
    let dailyQuote = quotes[randomRange(0, quotes.length)].createQuoteElement("div");
    dailyQuote.id = "daily-quote";
    dailyQuoteContainer.append(dailyQuote);

    quoteFormElement.insertAdjacentElement("beforebegin", dailyQuoteContainer);
}

//filterSearch
let searchFilter = document.querySelector("#filter-search");
searchFilter.addEventListener("input", () =>
{
    let allQuoteElements = document.querySelectorAll("#quote-list li");
    allQuoteElements.forEach(element => 
    {
        if (element.textContent.toLowerCase().includes(searchFilter.value.toLowerCase()))
        {
            if (element.classList.contains("d-none"))
            {
                element.classList.remove("d-none");
            }
        }
        else
        {
            if (!element.classList.contains("d-none"))
            {
                element.classList.add("d-none");
            }
        }
    });

})

