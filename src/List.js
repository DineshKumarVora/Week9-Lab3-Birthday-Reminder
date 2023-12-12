import React from 'react';
import Person from "./Person";

// const List = () => {
//   return (
//     <>
//       <h2>list component</h2>
//     </>
//   );
// };

// export default List;

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default List;
