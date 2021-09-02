const SearchBook = () => {
    // input value
    const searchField = document.getElementById('search_field');
    const searchText = searchField.value;
    searchField.value = '';

    // fetch
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchBooks(data.docs))
}

const displaySearchBooks = books => {
    const searchContainer = document.getElementById('search_container');
    searchContainer.textContent = '';

    // for each
    books.forEach(book => {
        const div = document.createElement('div');
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
        div.classList.add('div');

        // inner HTMl
        div.innerHTML = `
            <div class="card h-100">
                <img src="${imgUrl}" class="card-img-top" alt="...">

                <div class="card-body">
                    <h5 class="card-title">
                        <span class="fw-bolder mb-5">Name:</span> ${book.title}
                    </h5>
                    <p class="card-text">
                        <span class="fw-bolder">Author:</span> <span class="fst-italic"> ${book.author_name} </span>
                        <br>
                        <span class="fw-bolder">Publisher:</span> ${book.publisher}
                        <br>
                        <span class="fw-bolder">Publish:</span> <span class="text-muted">${book.first_publish_year}</span>
                    </p>
                </div>

                <div class="card-footer text-center">
                    <button class="btn btn-transform fw-bold"> Buy Now </button>
                </div>
            </div>
        `;
        searchContainer.appendChild(div);
    })
}