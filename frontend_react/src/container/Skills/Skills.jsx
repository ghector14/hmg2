import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, appWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Skills.scss';

const Skills = () => {
  return (
    <>
    <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion className="app__skills-list">

        </motion>
      </div>
    </>
  )
}

export default Skills