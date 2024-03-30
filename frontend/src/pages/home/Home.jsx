import React from 'react'
// import PropTypes from 'prop-types'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import MessageContainer from '../../components/messages/MessageContainer.jsx'
const Home = props => {
    return (
  
<div className='flex sm:h-[450px] md: h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdop-filter backdrop-blur-lg bg-opacity-0'>

<Sidebar/>
<MessageContainer/>
</div>

    // <conversation/>
  
    )
}

export default Home;