// import React from 'react';
// import './Content.css';
// import { FaReact, FaNodeJs, FaDatabase, FaCloud } from 'react-icons/fa';

// const Content = () => {
//   return (
//     <div className="new-page">
//       <div className="cards">
//         <div className="card">
//           <FaReact className="card-icon" />
//           <h2 className="card-title">React Development</h2>
//           <p className="card-description">Build dynamic web apps with React. Learn to create reusable components and manage state effectively.</p>
//         </div>
//         <div className="card">
//           <FaNodeJs className="card-icon" />
//           <h2 className="card-title">Node.js Development</h2>
//           <p className="card-description">Master backend development using Node.js. Understand how to build scalable server-side applications.</p>
//         </div>
//         <div className="card">
//           <FaDatabase className="card-icon" />
//           <h2 className="card-title">Database Management</h2>
//           <p className="card-description">Learn database design and management. Optimize data storage and retrieval with SQL and NoSQL databases.</p>
//         </div>
//         <div className="card">
//           <FaCloud className="card-icon" />
//           <h2 className="card-title">Cloud Computing</h2>
//           <p className="card-description">Get started with cloud computing. Deploy and manage applications in the cloud with AWS, Azure, and Google Cloud.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Content;



// import React from 'react';
// import './Content.css';

// const Content = () => {
//   const cards = [
//     { logo: '🔧', title: 'Card 1', description: 'Description for card 1.' },
//     { logo: '🌟', title: 'Card 2', description: 'Description for card 2.' },
//     { logo: '🚀', title: 'Card 3', description: 'Description for card 3.' },
//     { logo: '💡', title: 'Card 4', description: 'Description for card 4.' },
//   ];

//   return (
//     <div className="cards-page">
//       {cards.map((card, index) => (
//         <div className="card" key={index}>
//           <div className="logo">{card.logo}</div>
//           <h3 className="title">{card.title}</h3>
//           <p className="description">{card.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Content;








import React from 'react';
import './Content.css';
import { FaReact, FaNodeJs, FaDatabase, FaCloud } from 'react-icons/fa';

const Content = () => {
    return (
        <div id='services' className="page">
            <div className="card-container">
                <div className="card">
                    <div className="card-logo"><FaReact className="card-icon" /></div>
                    <h3 className="card-title">React Development</h3>
                    <p className="card-description">Build dynamic web apps with React. Learn to create reusable components and manage state effectively.</p>
                </div>
                <div className="card">
                    <div className="card-logo"><FaNodeJs className="card-icon" /></div>
                    <h3 className="card-title">Node.js Development</h3>
                    <p className="card-description">Master backend development using Node.js. Understand how to build scalable server-side applications.</p>
                </div>
                <div className="card">
                    <div className="card-logo"><FaDatabase className="card-icon" /></div>
                    <h3 className="card-title">Database Management</h3>
                    <p className="card-description">Learn database design and management. Optimize data storage and retrieval with SQL and NoSQL databases.</p>
                </div>
                <div className="card">
                    <div className="card-logo"><FaCloud className="card-icon" /></div>
                    <h3 className="card-title">Cloud Computing</h3>
                    <p className="card-description">Get started with cloud computing. Deploy and manage applications in the cloud with AWS, Azure, and Google Cloud.</p>
                </div>
            </div>
        </div>
    );
}

export default Content;
