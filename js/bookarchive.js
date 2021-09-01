const SearchBook = () => {
    // input value
    const searchField = document.getElementById('search_field');
    const searchText = searchField.value;
    searchField.value = '';

    // fetch
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchBooks(data.docs))
}

const displaySearchBooks = books => {
    // console.log(books)
    const searchContainer = document.getElementById('search_container');
    searchContainer.textContent = '';
    // for each
    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div');
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
        div.classList.add('div');

        // inner HTMl
        div.innerHTML = `
            <div class="card h-100">
                <img src="${imgUrl}" class="card-img-top" alt="...">

                <div class="card-body">
                    <h5 class="card-title">
                        <span class="fw-bolder">Name:</span> ${book.title}
                    </h5>
                    <p class="card-text">
                        <span class="fw-bolder">Author:</span> ${book.author_name}
                        <br>
                        <span class="fw-bolder">Publisher:</span> ${book.publisher}
                        <br>
                        <span class="fw-bolder">Publish:</span> ${book.first_publish_year}
                    </p>
                </div>

                <div class="card-footer text-center">
                    <button onclick="loadBook('${book.author_key}')" class="btn btn-transform border border-1 border-dark fw-bold"> More Info </button>
                </div>
            </div>
        `;
        searchContainer.appendChild(div);
    })
} 


// working

const loadBook = authorKey => {
    const url = `https://openlibrary.org/authors/${authorKey}.json`
    fetch(url)
    .then(res => res.json())
    .then(data => singleBookDetail(data))
}

const singleBookDetail = book => {
    console.log(book);
    const singleContainer = document.getElementById('single_container');
    
    singleContainer.innerHTML = `
        <div class="card-header bg-transparent border-success"> ${book.name} </div>
        <div class="card-body text-success">
        
              <h5 class="card-title">Success card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-footer bg-transparent border-success">Footer</div>
    `;
    window.scroll(0, 40)
}