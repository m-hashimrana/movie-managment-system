import React, { useEffect, useState } from 'react'
import { fetchGenres } from '../../services/api'


const Filters = () => {
  const [genres, setGenres] = useState(null);
  const [activeGenre, setActiveGenre] = useState();

  const getGenres = async () => {
    const data = await fetchGenres();
    return data?.data;
  }

  useEffect(() => {
    getGenres().then(res => {
      setGenres(res?.genres);
    }).catch(error => console.log("error ", error))
  }, [])

  console.log("genres are ", activeGenre)
  return (
    <div style={{ display: 'flex', overflowX: 'scroll', width: '100%', paddingTop: '30px', paddingBottom: '30px' }}>{genres?.map((item => <p key={item?.id} onClick={() => setActiveGenre(item)} style={{ border: '1px solid #fff', borderRadius: "12px", height: '32px', minWidth: '182px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "10px", backgroundColor: activeGenre === item ? 'greenyellow' : 'transparent', marginRight: '15px' }}>{item?.name}</p>))}</div>
  )
}

export default Filters;