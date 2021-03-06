// @flow

import styles from './About.css';
import React from 'react';
import Markdown from 'react-markdown';

// $FlowIssue
import readmeContent from 'raw!README.md';

const About = () => (
  <div className={styles.root}>
    <Markdown source={readmeContent} />
  </div>
);

export default About;
