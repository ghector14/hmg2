import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { IoDiamondOutline } from 'react-icons/io5';

const SocialMedia = () => {
  return (
    <div className="app__social" id="socialapps">
        <div>
          <a id="a" href="https://twitter.com/gomezhector62" target="_blank">
            <BsTwitter />
          </a>
        </div>
        <div>
          <a id="a" href="https://diamondapp.com/u/ghector14?tab=posts" target="_blank">
            <IoDiamondOutline />
          </a>
        </div>
        <div>
          <a id="a" href="https://www.instagram.com/ghector14/" target="_blank">
            <BsInstagram />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia