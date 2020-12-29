import axios from 'axios';


const KEY="AIzaSyDn1CemUEkBxAMhJq9qpbNlVBUsif2WICg";


export default axios.create({
    baseURL: " https://www.googleapis.com/youtube/v3",
    params:{
        part:"snipet",
        type: 'video',
        maxresult :5,
        key: KEY
    }

});