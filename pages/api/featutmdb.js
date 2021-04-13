import { apikey, urlbase } from '../../lib/credentials';

export default async (req, res) => {
//    const result = await fetch ('https://api.themoviedb.org/3/trending/movie/week?api_key=73f0f32e824339c522c61644231c066c&language=pt-BR');
    const result = await fetch (`${urlbase}/trending/movie/week?api_key=${apikey}&language=pt-BR`);
    const json = await result.json ();


    res.status(200).json({ 
        list: json.results
    });
  }