import {useState} from 'react';
import { CORE_CONCEPTS } from "./data.js";
import Header from "./Components/Header/Header.jsx";
import  CoreConcept  from './Components/CoreConcept.jsx';
import TabButton from "./Components/TabButton.jsx";
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState ();
  
  function handleSelect (selectedButton) {
  setSelectedTopic(selectedButton); 
 //console.log(selectedTopic);
}
let tabContent = <p>Please select a topic.</p>;
if (selectedTopic){
  tabContent=(<div id="tab-content" >
  <h3>{EXAMPLES[selectedTopic].title}</h3> 
  <p>{EXAMPLES[selectedTopic].description} </p>
  <pre>
   <code>
   {EXAMPLES[selectedTopic].code}
   </code>
  </pre>
 </div>);
}
   return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">  
        <h2>Core Concepts</h2>
      <ul>
        <CoreConcept {...CORE_CONCEPTS[0]}
         />
        <CoreConcept
        {...CORE_CONCEPTS[1]}
        />
        <CoreConcept
        {...CORE_CONCEPTS[2]}
        />
        <CoreConcept
        {...CORE_CONCEPTS[3]}
        />
      </ul>
      </section>
      <section id="examples">
      <h2>Examples </h2>
      <menu>
        <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
        <TabButton onSelect={()=>handleSelect('JSX')}>JSX</TabButton>
        <TabButton onSelect={()=>handleSelect('Props')}>Props</TabButton>
        <TabButton onSelect={()=>handleSelect('State')}>State</TabButton>
     </menu>
    {tabContent}
      </section>
      </main>
    </div>
  );
}

export default App;
