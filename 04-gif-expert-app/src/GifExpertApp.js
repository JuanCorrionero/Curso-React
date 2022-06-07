import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => setCategories([...categories, 'HunterXHunter'])
    // const handleAdd = () => setCategories( cats => [...cats, 'HunterXHunter']);
    


  return (
      <>
        <AddCategory setCategories={ setCategories } />

      <hr />

    <ol>
        {
            categories.map( category => (
                <GifGrid
                key= {category}
                category= {category}
                 />
             ))
        }
    </ol>

      </>
  )
}

export default GifExpertApp;