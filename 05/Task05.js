import React from 'react';
import Github from '../src/modules/github/github';
import Stackoverflow from '../src/modules/stackoverflow/stackoverflow';

const Task05 = () => {
  return (
    <section>
      <h2>Task 05</h2>

      <h3>GitHub</h3>
      <Github />

      <h3>StackOverflow</h3>
      <Stackoverflow />
    </section>
  );
};

export default Task05;