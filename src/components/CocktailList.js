import React from 'react'
import { useGlobalContext } from '../context'
import Cocktail from './Cocktail'
import Loading from './Loading'
const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()
  console.log(cocktails)
  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no coctails matched your search criteria
      </h2>
    )
  }
  return (
    <div>
      <h1>cocktail list</h1>
    </div>
  )
}

export default CocktailList
