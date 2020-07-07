import { createStore } from 'redux';

const newsHomeInicialState = {
    sportsNews: [],
    technologyNews: [],
    politicsNews: [],
    internationalNews: [],
    designNews: [],
    showNews: [],
    homeNews: [{
        "news_id": 143634,
        "url": "http://www.clarin.com/politica/bonafini-insulto-macri-lanzo-grave-amenaza-clarin_0_rkrqk-NkW.html",
        "title": "Bonafini insultó a Macri y lanzó una grave amenaza contra los medios",
        "date": 1493598744,
        "source_id": 2,
        "img_url": "https://images.clarin.com/2017/04/30/H1BeRxE1b_600x338.jpg",
        "source_name": "Clarin",
        "reactions": []
        }, 
        {
        "news_id": 143284,
        "url": "http://www.clarin.com/politica/cambios-tironeos-mesa-chica-macri-definir-campana_0_S1Y_RNGJZ.html",
        "title": "Cambios y tironeos en la mesa chica de Macri para definir la campaña",
        "date": 1493525490,
        "source_id": 2,
        "img_url": "https://images.clarin.com/2017/03/02/rkKf4hS9e_600x338.jpg",
        "source_name": "Clarin",
        "reactions": [],
        },
        {
        "news_id": 143634,
        "url": "http://www.clarin.com/politica/bonafini-insulto-macri-lanzo-grave-amenaza-clarin_0_rkrqk-NkW.html",
        "title": "Bonafini insultó a Macri y lanzó una grave amenaza contra los medios",
        "date": 1493598744,
        "source_id": 2,
        "img_url": "https://images.clarin.com/2017/04/30/H1BeRxE1b_600x338.jpg",
        "source_name": "Clarin",
        "reactions": []
        }, 
        {
        "news_id": 143284,
        "url": "http://www.clarin.com/politica/cambios-tironeos-mesa-chica-macri-definir-campana_0_S1Y_RNGJZ.html",
        "title": "Cambios y tironeos en la mesa chica de Macri para definir la campaña",
        "date": 1493525490,
        "source_id": 2,
        "img_url": "https://images.clarin.com/2017/03/02/rkKf4hS9e_600x338.jpg",
        "source_name": "Clarin",
        "reactions": [],
        }
    ]
};

const reducerNews = (state = newsHomeInicialState, action) => {
    return state;
}

export default createStore(reducerNews);