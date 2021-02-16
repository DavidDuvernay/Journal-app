import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className= 'notes__main-content'>
            
            <NotesAppBar />

            <div className= 'notes__content'>
                <input
                    type= 'text'
                    placeholder= 'Life is amazing'
                    className= 'notes__title-input'
                    autoComplete= 'off'
                />

                <textarea
                  placeholder= 'What happened today'
                  className= 'notes__textarea'
                >  
                </textarea>

                <div className= 'notes__image'>
                    <img 
                        src= 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
                        alt= 'landscape'
                    />

                </div>
            </div>
        </div>

    )
}