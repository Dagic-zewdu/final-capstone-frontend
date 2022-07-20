// /* eslint-disable react/prop-types */
// import React from 'react';
// import { Card } from 'react-bootstrap';
// import {
//   faFacebook,
//   faGoogle,
//   faTwitter,
// } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import getRandomNumberBetween from '../../utils/utils';
// import './styles/index.css';

// const bg = [];
// function HomeCard({ cycle }) {
//   return (
//     <Card className="border-0 bg-transparent rounded w-75 mt-5" style={{ height: '700px' }}>
//       <div
//         className={`d-flex align-items-center justify-content-center rounded-circle w-100 ${bg[getRandomNumberBetween(3)]}`}
//         style={{ height: '400px' }}
//       >
//         <Card.Img
//           className="rounded-circle mx-auto d-block w-75 home-show-image"
//           src={cycle?.images[getRandomNumberBetween(cycle?.images.length)]}
//           style={{ height: '300px', objectFit: 'cover', opacity: 2 }}
//         />
//       </div>
//       <Card.Title
//         className="text-center mt-3 text-uppercase fa-4x"
//         style={{
//           color: '#000', fontFamily: "'Passion One', cursive", letterSpacing: '2px', fontSize: '30px',
//         }}
//       >
//         {cycle?.title}
//       </Card.Title>
//       <p className="fw-bolder space text-center mt-2 mb-3">---------------</p>
//       <p className="text-center mb-3 fw-bolder" style={{ fontFamily: "'Rubik', sans-serif", fontSize: '14px', color: '#d3d3d3' }}>{cycle?.description.slice(0, 50)}</p>
//       <div className="mb-5 text-center justify-content-evenly d-flex align-items-center">
//         <div>
//           <FontAwesomeIcon icon={faFacebook} className="fa-2x mr-3" style={{ color: '#d3d3d3' }} />
//         </div>
//         <div>
//           <FontAwesomeIcon icon={faTwitter} className="fa-2x mr-3" style={{ color: '#d3d3d3' }} />
//         </div>
//         <div>
//           <FontAwesomeIcon icon={faGoogle} className="fa-2x mr-3" style={{ color: '#d3d3d3' }} />
//         </div>
//       </div>

//     </Card>
//   );
// }

// export default HomeCard;
/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import getRandomNumberBetween from '../../utils/utils';

const bg = ['bg-info', 'bg-secondary', 'bg-warning'];
function HomeCard({ cycle }) {
  return (
    <Card className="border-0 bg-transparent rounded w-100 mt-5" style={{ height: '700px' }}>
      <div
        className={`d-flex align-items-center justify-content-center rounded-circle w-100 ${bg[getRandomNumberBetween(3)]}`}
        style={{ height: '400px' }}
      >
        <Card.Img
          className="rounded-circle w-100"
          src={cycle?.images[getRandomNumberBetween(cycle?.images.length)]}
          style={{ height: '400px', objectFit: 'cover', opacity: 2 }}
        />
      </div>
      <Card.Title
        className="text-center mt-3 text-uppercase fa-4x"
        style={{
          color: '#000', fontFamily: "'Passion One', cursive", letterSpacing: '2px', fontSize: '30px',
        }}
      >
        {cycle?.title}
      </Card.Title>
      <hr style={{ borderTop: '0.5px dashed #eee' }} />
      <p className="text-center mb-5 text-secondary fw-bolder" style={{ fontFamily: "'Rubik', sans-serif", fontSize: '14px',  }}>{cycle?.description.slice(0, 50)}</p>

    </Card>
  );
}

export default HomeCard;