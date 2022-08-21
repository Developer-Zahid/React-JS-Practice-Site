import React from 'react';
import Header from './layouts/Header';
import Card from './components/Card';
import ArticlesData from './all-data/articles-data/data.json'

function App(){
    return(
        <main>
            <Header />
            <section className="all-article section-gap">
                {ArticlesData.map((eachData, eachIndex)=> <Card key={eachIndex} cardLink="./article" cardImage={eachData.article_image} cardTitle={eachData.article_title + " " + (eachIndex + 1)} cardText={eachData.article_description}/>)}
            </section>
        </main>
    )
}

export default App;