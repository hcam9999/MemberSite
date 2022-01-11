
import { useState } from 'react/cjs/react.development'
import Card from './Card'


const Content = ({ members, search, setSearch }) => {

  const trimmedInput = search.replace(/\s+/g, '').toLowerCase();                                        //remove spacing from input   
  const filterMembers = () => {
    return members.filter((member => member.name.first.toLowerCase().includes(trimmedInput)             //search by firstname
        || member.name.last.toLowerCase().includes(trimmedInput)                                        //searh by lastname
        || (`${member.name.first}${member.name.last}`).toLowerCase().includes(trimmedInput)             //search by first & last
        || (`${member.name.last}${member.name.first}`).toLowerCase().includes(trimmedInput)             //search by last & first
        ))
  }
    const memberData = filterMembers().map(member => {

        return (
            <Card
              key={member.dob.date}
              member={member}
            />
          )
          })
          
    return (
        <>  
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>                               {/*prevent page from reloading */}
            <label htmlFor="search">Search Members</label>
            <input
              id="search"
              type="text"
              placeholder="Search for members"
              value={search}
              onChange={(e) => setSearch(e.target.value)}                                                   /*use value from input to search */
            />
          </form>
            <section className='card-list'>
                {memberData}
            </section>
            
        </>
            
    )
}

export default Content
