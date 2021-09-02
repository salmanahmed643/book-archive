const SearchBook = () => {
    // input value
    const searchField = document.getElementById('search_field');
    const searchText = searchField.value;
    searchField.value = '';

    // fetch
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchBooks({numFound, docs} = data))
}

const displaySearchBooks = books => {
    console.log(books.docs)
    console.log(numFound)

}


/* 
 */