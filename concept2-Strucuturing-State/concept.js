//State Structure:-Structuring state well can make a difference between a component that is pleasant to modify and debug, and one that is a constant source of bugs


/*1.Principles for structuring state :-
                                         1.Group related state
                                         2.Avoid contradictions in state. 
                                         3.Avoid redundant state
                                         4.Avoid duplication in state
                                         5.Avoid deeply nested state
*/
/*1.Group related state:-
                          ->If some two state variables always change together, it might be a good idea to unify them into a single state variable.
                          ->You can use either of these approach below
                          */
//Approach1
const [x, setX] = useState(0);
const [y, setY] = useState(0);
//Approach2
const [position, setPosition] = useState({ x: 0, y: 0 });
/*2.Avoid contradictions in state:-
                                   ->Choose your state variables carefully to avoid creating “impossible” states.                                   
                                   ->When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.
*/                           
/*3.Avoid redundant in state:-
                            ->If form has three state variables: firstName, lastName, and fullName. 
                            ->Here, fullName is redundant. You can always calculate fullName from firstName and lastName during render, so remove it from state.
*/
/*4.Avoid duplication in state:-
                            -> When the same data is duplicated between multiple state variables or within nested objects, it is difficult to keep them in sync. 
                            ->Reduce duplication when you can.

*/
/*5.Avoid deeply nested state:-
                            ->If the state is too nested to update easily, consider making it flat(normalised)
*/