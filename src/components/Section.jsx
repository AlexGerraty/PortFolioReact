import React from 'react';

function Section({ id, component }) {
  return <section id={id}>{component}</section>;
}

export default Section;