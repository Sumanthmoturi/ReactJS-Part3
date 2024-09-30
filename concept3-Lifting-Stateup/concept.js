/*1.Lifting state up:-
                    1.Sometimes, you want the state of two components to always change together. 
                    2.To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up
*/

//2.Example:-
import { useState } from 'react';
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakh</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        the Kazakh word for "apple" and is often translated as "full of apples".
      </Panel>
    </>
  );
}
function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}


/*3.A single source of truth for each state:-
                                             1.In a React application, many components will have their own state. Some state may live close to the leaf components like inputs. Other state may live closer to the top of the app. 
                                             3.For each unique piece of state, you will choose the component that “owns” it. This principle is also known as having a “single source of truth”.
*/



/*4.Controlled and uncontrolled components:-
                                             1.Controlled components are driven by props
                                             2.Uncontrolled components are driven by local state
*/