export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '3722a6f74cmsh8ecb6399edd3c2bp1765f0jsnb50a922caba7',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    }
  };


export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '3722a6f74cmsh8ecb6399edd3c2bp1765f0jsnb50a922caba7',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}









