# MyReads Project

MyReads project is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
                                                        Currently Reading
                                                        Want to Read
                                                        Read
Each book has a control that lets you select the shelf for that book. When you select a 
different shelf, the book moves there. The default value for the control should always be the current shelf the book is in.
The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.


## Using the App

* start the development server with `npm start` when in the project folder using the Terminal

## File Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the app.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html 
└── src
    ├── components # The components of the app.
        ├── Book.js # Represents each book.
        └── ContextProvider.js # Provides a context to be used to handle the state of the book in the book-"parent" and all of its "children".
        ├── SearchButton.js # Holds the code for the + button in the lower right corner of the page.
        └── Shelf.js # Represents a shelf in the App (Curently Reading, Want to Read or Read).
    ├── views
        ├── Home.js # Home page view. Holds the html and the functionality of the first page of the App.
        └── Search.js # Search page view. Holds the html and the functionality of the Search page.
    ├── App.css # Styles of the app. 
    ├── App.js # This is the root of the app. 
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Methods used are below.
    ├── icons # Helpful images for the app. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # The file is used for DOM rendering only.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed necessary operations to be perform on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Credits

Forrest Walker for (Udacity) Project 6 My-Reads Walk Through video: https://www.youtube.com/watch?v=bpKI3R0nf7E 
