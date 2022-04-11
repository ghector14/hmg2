import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋🏼</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Bonjour, Je suis</p>
              <h1 className="head-text">Hector</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Web 3</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
      <motion.img
         whileInView={{ x: [-100, 0] }}
         transition={{duration: 1, ease: "easeInOut" }}
         src={images.circle}
         alt="profile_circle"
         className="overlay_circle"
      />
    </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div>
            
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header