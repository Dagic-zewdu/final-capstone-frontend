import React from 'react';
import {
  faFacebook, faInstagram, faPinterest, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialLinks() {
  return (
    <div className="d-flex justify-content-around">
      <FontAwesomeIcon icon={faFacebook} className="fa-2x mr-3" />
      <FontAwesomeIcon icon={faTwitter} className="fa-2x mr-3" />
      <FontAwesomeIcon icon={faInstagram} className="fa-2x mr-3" />
      <FontAwesomeIcon icon={faPinterest} className="fa-2x mr-3" />
    </div>
  );
}

export default SocialLinks;
