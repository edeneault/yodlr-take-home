import React from "react";
import { Container } from "react-bootstrap";

function Homepage() {
  return (
    <Container>
      <h1 className=' fade-in slide-in'>Welcome to Yodlr!</h1>
      <div className='m-2 p-2'>
        <p>
          <mark className=''>yodel noun</mark> Definition of yodel (Entry 2 of
          2) : a song or refrain sung by yodeling also : a yodeled shout or cry
        </p>

        <blockquote className='blockquote-footer'>
          merriam-webster dictionary.
        </blockquote>
      </div>
      <div className='m-2 p-2'>
        <p>
          <mark>yodel verb</mark> Definition of yodel (Entry 1 of 2)
          intransitive verb : to sing by suddenly changing from a natural voice
          to a falsetto and back
        </p>

        <blockquote className='blockquote-footer'>
          merriam-webster dictionary.
        </blockquote>
      </div>
    </Container>
  );
}

export default Homepage;
