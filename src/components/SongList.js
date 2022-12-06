import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';


const SongList = () => {
    const [songs, setSongs] = useState([ 
        { title: 'Almost Home', id: 1 },
        { title: 'Memory Gospel', id: 2 },
        { title: 'This Wild Darkness', id: 3 }
    ]);

    const addSong = (title) => {
        //setSongs is from above it is used to modify the 'songs' list/array. The 3 periods is to pull the songs from above. 
        setSongs([...songs, { title, id: uuidv4() }])
    }
    
    return (
        <div className='song-list'>
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
        );
    }
 
export default SongList;