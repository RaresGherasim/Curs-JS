const btn = document.querySelector('#fetch-btn');
const displayDiv = document.querySelector('.display-quote');
const categDropDowm = document.querySelector('#catSelector');

async function getCategories() {



    
    const categ = await fetch("https://api.chucknorris.io/jokes/categories");
    const categList = await categ.json();
    categList.forEach(categName => {
        const option = document.createElement('option');
        option.textContent = categName;
        categDropDowm.append(option);
    });


    //btn.disabled = false;
    btn.removeAttribute('disabled');
}

async function getQuote() {
    
    //select the category option
    const selectedOption = categDropDowm.querySelector('option:checked');
    const categoryName = selectedOption.textContent;

    displayDiv.textContent = 'Retriving quote..' ;
    const quote = await fetch(`https://api.chucknorris.io/jokes/random?category=${categoryName}`);
    const movies = await quote.json();
    displayDiv.textContent = movies.value;
};

getCategories();

btn.addEventListener('click', getQuote);

