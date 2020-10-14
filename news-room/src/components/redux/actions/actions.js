export const FETCH_HOME_NEWS = 'FETCH_HOME_NEWS';
export const FETCH_CATEGORY_NEWS = 'FETCH_CATEGORY_NEWS';

function fetchHomeNews(homeNews) {
    return {
        type: FETCH_HOME_NEWS,
        homeNews: homeNews
    }
};

function fetchCategoryNews(categoryNews) {
    return {
        type: FETCH_CATEGORY_NEWS,
        categoryNews: categoryNews
    }
};
