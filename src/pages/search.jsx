import {useState,useEffect } from 'react';
import IdentificadorStatus from '../components/identificadorStatus.jsx';
import './search.css';

function Search() {
    const baseURL= 'https://rickandmortyapi.com/api/character';
    const [personajes, setPersonajes] = useState([]);
    const [pages,setPages]= useState([]);
    useEffect(()=>{
        fetch(baseURL)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                let temp=[];
                for(let i=1;i<=data.info['pages'];i++){
                    temp.push(i);
                }
                setPages(temp);
                setPersonajes(data.results );
            })
        
    },[]);
    return (
        <div>
            <h1>Search</h1>
            <div className='container_card__personaje'>
                {personajes.map(personaje  => 
                    <div key={personaje.id}  className='card_personaje'>
                        <img className='card_personaje__img'  src={personaje.image} alt={personaje.name} />
                        <div className='card_personaje__info'>
                            <h3>{personaje.name}</h3>
                            <ul>
                                <li>
                                    <div style={{display:' flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                                        <IdentificadorStatus status={personaje.status} /> 
                                        <h5>{personaje.status}</h5> 
                                    </div>
                                </li>
                                <li>
                                    <h5>género: {personaje.gender}</h5>
                                </li>
                                <li>
                                    <h5>episodios: {personaje.episode.length}</h5>
                                </li>
                                <li>
                                    <h5>especie: {personaje.species}</h5>
                                </li>
                                <li>
                                    <h5>origen: {personaje.origin['name']}</h5>
                                </li>
                            </ul>
                        </div>
                    </div> 
                )} 
            </div>
            
            <div>
                {pages.map(page => <p key={page}>{page}</p>)} 
            </div>
        </div>
    );
}

export default Search;
