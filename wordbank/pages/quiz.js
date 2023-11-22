import React, { useState } from "react";
import styles from "../styles/styles.css";
import Navbar from "../components/navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//holds all react words
export const reactWords = {
  Keys: "A special string attribute you need to include when creating arrays of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside an array to give the elements a stable identity.",
  Refs: "React supports a special attribute that you can attach to any component. The ref attribute can be an object created by React.createRef() function or a callback function, or a string (in legacy API). When the ref attribute is a callback function, the function receives the underlying DOM element or class instance (depending on the type of element) as its argument. This allows you to have direct access to the DOM element or component instance.",
  Reconciliation:
    "When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called “reconciliation”.",
  Component:
    "(most-commonly) A function that accepts props, and returns things to display in the browser.",
  Enzyme:
    "A utility that renders React components in tests, and provides methods for querying their state and props.",
  Linting:
    "Run a program that analyses your code for issues. Issues could mean syntax or style issues, as well as potential bugs.",
  Props: "Arguments you pass as input to a component in React.",
  webpack:
    "A program that reads through your codebase, follows your imports and exports, removes unused code, and outputs a bundle ready to be served by a server.",
  DOM: "A programming interface for both HTML and XML documents. It represents a page such that programs can adjust the format, layout, and content of the document. The document is represented as nodes and objects by the DOM. This way, the programming languages can be connected to the page. A Web page is a document. You can display this document either in the browser window or as an HTML source. But in both cases, it is the same document. The Document Object Model (DOM) represents the same document so that it can be manipulated. The DOM is an object-oriented representation of a web page that can be changed using a scripting language such as JavaScript.",
  VDOM: "A programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.There is a corresponding “virtual DOM object” in React for a DOM object. A virtual DOM object has the same properties as a real DOM object, but it lacks the power of the actual thing to change what’s on the screen directly.",
  Transpiler:
    "Defined as a compiler that transforms one type of syntax into another. Transpilers, like Babel or TypeScript, is used to translate JSX.",
  JSX: "JavaScript extension, or more often JSX, is an extension of React that helps us to write HTML-like JavaScript.While it seemed like a poor practice to use JavaScript and markup in the same place in previous paradigms, it turns out that mixing the view with the functionality makes reasoning about the view straightforward.",
  Elements:
    "Smallest building blocks of React apps. An element describes what you want to see on the screen. An element is like a single frame in a movie: it represents the UI at a certain point in time. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. Elements of Reacts are unalterable. You can’t alter the children or attributes once you create an element.",
  State:
    "In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this. The components of React have a built-in state object. The state object is where you store the values of the property that belong to the component. The component re-renders as the state object updates",
  Hooks:
    "They let you use state and other React features without writing a class. Hooks are not a substitution for the knowledge of React core principles. Instead, Hooks offers a more direct API for the React concepts you already know: props, state, meaning, refs, and life cycle. Hooks also provide a strong new way to combine them.",
  Library:
    "A library is simply a collection of class definitions, helping its user to accomplish a specific task. In the case of React, to define UIs.",
};

//holds all JS words
export const jsWords = {
  var: "Can be reassigned but only accessed within a function, meaning function scope. Variables defined with var move to the top when code is executed.",
  const:
    "Cannot be reassigned and not accessible before they appear within the code, meaning block scope.",
  let: "Similar to const with block scope, however, the let variable can be reassigned but not re-declared.",
  Objects:
    "The basic data structure in JavaScript. Objects have properties, also known as keys, to which are assigned values. The value can be a number, a string, an array, a function, or even another object! This allows you to build complex, but easy to use data structures.",
  function: "This keyword allows us to define our own functions in JavaScript.",
  Conditional:
    "Allows an application to decide between one or more courses of action, based on whether a particular condition is true. Conditional statements use what is called boolean logic to determine what to do. Boolean logic is based on looking at if a statement is true, or if it is false. We use this all the time in our everyday world. “If it is raining, take an umbrella,” is an example of a conditional statement.",
  Loop: "A loop is a structure in code where you perform the same action or actions multiple times in a row.",
};

const getRandomDefinition = () => {
  const allDefinitions = {
    ...reactWords,
    ...jsWords,
  };
  const definitions = Object.keys(allDefinitions);
  const randomIndex = Math.floor(Math.random() * definitions.length);
  return {
    definition: allDefinitions[definitions[randomIndex]],
    word: definitions[randomIndex],
  };
};

const Quiz = () => {
  const [showWord, setShowWord] = useState(false);
  const [currentDefinition, setCurrentDefinition] = useState(
    getRandomDefinition()
  );

  const generateNewDefinition = () => {
    const { definition, word } = getRandomDefinition();
    setCurrentDefinition({ definition, word });
    setShowWord(false);
  };

  return (
    <div className="text-center">
      <Navbar />
      <h1 className="heading-font mt-4 mb-4">Random Definition</h1>
      <p className="text-font container mb-4">{currentDefinition.definition}</p>
      {showWord && (
        <div className="text-font">
          <h2>Associated Word:</h2>
          <p>{currentDefinition.word}</p>
        </div>
      )}
      <button
        className="btn btn-dark me-3"
        onClick={() => setShowWord(!showWord)}
      >
        {showWord ? "Hide Word" : "Show Word"}
      </button>
      <button className="btn btn-dark" onClick={generateNewDefinition}>
        New Definition
      </button>
    </div>
  );
};

export default Quiz;
