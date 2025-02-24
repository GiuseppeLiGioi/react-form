import { useState } from "react";

const ArticleList = () => {
    const [articles, setArticles] = useState([
        { id: 1, title: "Introduzione sulla storia di Roma" },
        { id: 2, title: "Introduzione di storia" },
        { id: 3, title: "Introduzione di geografia" },
        { id: 4, title: "Introduzione di informatica" },
        { id: 5, title: "Introduzione di scienze" },
        { id: 6, title: "Introduzione di letteratura" }
    ]);

    const [newArticle, setNewArticle] = useState("");

    // Funzione AddArticle, che si attiva al submit del form
    const addArticle = (e) => {
        e.preventDefault(); // Evita il refresh della pagina

    //{} necessarie perchè lavoro con arr di oggetti, ad ogni aggiunta ricostruisco l'ogetto da mostrare, formato da id e title.
    //se facevo esercizio con array di stringhe, come fatto da Ale in classe, sarebbe stato:  setArticles([...articles, newArticle]);
        if (newArticle !== "") { 
            setArticles([...articles, { id: articles[articles.length -1].id, title: newArticle }]);
            setNewArticle("");
        }
    };

    return (
        <header>
            <h2 id="title_header">LISTA DI ARTICOLI</h2>

            <ul className="ul_ArticleList">
                {articles.map((element) => (
                    <li className="title_class" key={element.id}>
                        {element.title}
                    </li>
                ))}
            </ul>

            <form onSubmit={addArticle}>
                <input
                    type="text"
                    className="form_control"
                    placeholder="Inserisci nuovo titolo da aggiungere"
                    value={newArticle}
                    onChange={(e) => setNewArticle(e.target.value)}
                />
                <button className="btn">Aggiungi</button>
            </form>
        </header>
    );
};

export default ArticleList;



