import axios from 'axios';
import translater from '@vitalets/google-translate-api';

const url = `https://newsapi.org/v2/top-headlines?country=de&category=technology&pageSize=1&apiKey=${process.env.NEWS_API_KEY}`;

export const handler = async (event) => {

    try {
        const newsDE = await axios.get(url);
        //translateNews(news.data.articles[0].title);
        const newsEN = await translater.translate(newsDE.data.articles[0].title, { to: 'en' })
        
        const response = {
            statusCode: 200,
            body: JSON.stringify({ message: newsEN.text }),
        };
        return response;
    }
    catch (error) {
        return {
            statusCode: 404,
            body: JSON.stringify({ ERROR: error.message })
        };
    }

};
