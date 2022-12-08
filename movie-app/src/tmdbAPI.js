import axios from 'axios';

// const API_KEY = '4a25f61de2f3faf6ce9c03308ff09d05';
// const API_URL = 'https://api.themoviedb.org/3/';

// API에서 중복되는 값 미리 axios 인스턴스로 설정
// axios. 명령어 사용하기 위해 axios config 설정
const tmdbAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    // 요청과 함께 전송되는 URL 파라미터
    params: {
        api_key : "4a25f61de2f3faf6ce9c03308ff09d05",
        language : 'ko-KR'
    }
})

tmdbAPI.get('movie/popular');

export default tmdbAPI;