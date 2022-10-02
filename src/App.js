import React from 'react';
import Header from './layouts/Header';
import Card from './components/Card';
import ArticlesData from './all-data/articles-data/data.json'

function App(){
    // ArticlesData.map((eachData, eachIndex)=>(
    //     console.log(eachData.article_tags)
    //     // .map((eachTag, eachTagIndex)=>(
    //     //     console.log(eachTag.article_tags__name)
    //     // ))
    // ))
    return(
        <main>
            <Header />
            <section className="all-article section-gap">
                {
                    ArticlesData.map((eachData, eachIndex)=> (
                        <Card key={eachIndex} cardLink="./article" cardMetas={eachData.article_metas} cardImage={eachData.article_image} cardTitle={eachData.article_title + " " + (eachIndex + 1)} cardText={eachData.article_description}/>
                    ))
                }
            </section>
        </main>
    )
}

export default App;