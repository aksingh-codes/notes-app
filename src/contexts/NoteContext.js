import { createContext, useEffect, useReducer } from "react";
import bgColor from "../utils/randomBgColor";
import noteReducer from "./noteReducer";

const initialNotes = [
  {
    id: "0",
    title: "JavaScript",
    content: `JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.
      This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about APIs that are specific to Web pages, please see Web APIs and DOM.
      The standards for JavaScript are the ECMAScript Language Specification (ECMA-262) and the ECMAScript Internationalization API specification (ECMA-402). As soon as one browser implements a feature, we try to document it. This means that cases where some proposals for new ECMAScript features have already been implemented in browsers, documentation and examples in MDN articles may use some of those new features. Most of the time, this happens between the stages 3 and 4, and is usually before the spec is officially published.
      Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and use.`,
  },
  {
    id: "1",
    title: "Title",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?",
  },
  {
    id: "2",
    title: "Title",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?",
  },
  {
    id: "3",
    title: "Title",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?",
  },
  {
    id: "4",
    title: "Title",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?",
  },
  {
    id: "5",
    title: "Title",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?",
  },
  {
    id: "6",
    title: "Title",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis, delectus numquam illum nisi, aperiam eveniet reprehenderit perferendis distinctio consequuntur dolorum blanditiis voluptatem a. Quibusdam voluptatibus maiores deleniti voluptatem eum?",
  },
];

export const NotesContext = createContext(null);
export const NotesDispatchContext = createContext(null);

export const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(noteReducer, [], () => {
    const localData = localStorage.getItem("notes");
    console.log(JSON.parse(localData))
    return localData ? JSON.parse(localData) : initialNotes.map(note => { return {...note, bgColor: bgColor()} });
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
};
