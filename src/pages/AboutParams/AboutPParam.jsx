import React from 'react';
import { useParams } from 'react-router-dom';
import './params.css'

const data = [
    { factId: 1, 
      name: 'Sherlock Holmes was originally going to be called Sherrinford.',
      paragraph: 'The name was altered to Sherlock, possibly because of a cricketer who bore the name. Sir Arthur Conan Doyle, who created Holmes (of course), was a fan of cricket and the name ‘Sherlock’ appears to have stuck in his memory. Doyle was also a keen cricketer himself, and between 1899 and 1907 he played ten first-class matches for the Marylebone Cricket Club – quite fitting, since Baker Street is situated in the Marylebone district of London. For more on the creation of Holmes, see the detailed ‘Introduction’ in The Uncollected Sherlock Holmes.'
    },

        { factId: 2, 
      name: 'The first Sherlock Holmes novel was something of a flop.',
      paragraph: 'The detective made his debut in the novel A Study in Scarlet (1887), written by a twenty-seven-year-old Doyle in just three weeks. Famously, Doyle was inspired by a real-life lecturer of his at the University of Edinburgh, Dr Joseph Bell, who could diagnose patients simply by looking at them when they walked into his surgery; the other important influence on the creation of Sherlock Holmes was Edgar Allan Poe’s fictional detective, C. Auguste Dupin, two of whose adventures we include in our pick of Poe’s best short stories. Doyle wrote the book while he was running a struggling doctor’s surgery down in Portsmouth. The novel was rejected by many publishers and eventually published in Beeton’s Christmas Annual (named after the husband of Mrs Beeton, of the book of cookery and household management). It didn’t sell well, and more or less sank without trace. '
    },

    { factId: 3, 
        name: 'The second Sherlock Holmes novel was the result of a dinner party with Oscar Wilde.',
        paragraph: ' One person who had admired the first novel was the editor Joseph Stoddart, who edited Lippincott’s Monthly Magazine. He convinced Doyle, at a dinner party in 1889, to write a second novel featuring the detective, for serialisation in the magazine. Wilde, who was also present, also agreed to write a novel for the magazine – his only novel, The Picture of Dorian Gray, which appeared in 1890, the same year as The Sign of the Four, Doyle’s novel.'
      },

      { factId: 4, 
        name: ' Sherlock Holmes didn’t wear a deerstalker. Much.',
        paragraph: 'The famous image of Holmes wearing a deerstalker hat is a product of the celebrated images which accompanied the short stories, which appeared in the Strand magazine from 1891 (beginning with the wonderful story ‘A Scandal in Bohemia’). It is when the stories began to appear that Sherlock Holmes became a worldwide sensation. Sidney Paget, who drew the illustrations, had Holmes wearing a deerstalker when the detective went into the country to investigate mysteries at country houses and in small rural villages, but most people think of the detective as always donning the hat when off to investigate a case.'
      },

      
];



const AboutParam = () => {

const param = useParams();

const fact = data.find(fact => fact.factId == param.factId)

 

    if(!fact){
        return  <div><h1>fact not found </h1></div>
    }


    return (
    <div>
 

        <div className='params'>
        <h1>{fact.name} </h1>
        <h3>{fact.paragraph } </h3>
        </div>
    </div>
  )
}

export default AboutParam
