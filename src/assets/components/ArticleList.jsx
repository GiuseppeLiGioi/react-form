import { useState } from "react";

const ArticleList = () => {

    const [articles, setArtciles] = useState([
        "Introduzione sulla storia di Roma",
        "Introduzione d'inglese",
        "Introduzione di storia",
        "Introduzione di francese",
        "Introduzione di giapponese",
        "Introduzione di letteratura"
    ])


    const [newArtcile, setNewArticle] = useState("");


    return(
        <header>
            <h2>LISTA DI ARTICOLI</h2>

            <ul>

                {
                    
                }

            </ul>
        </header>

    )
}

export default ArticleList;