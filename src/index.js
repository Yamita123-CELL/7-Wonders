import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sdata from './Sdata';
console.log(Sdata[0].sname);
ReactDOM.render(
  <React.StrictMode>
    <section>
    <span className="gradient"></span>
    <h1 className="heading_style">Seven Wonders of the World</h1>
    {Sdata.map((val) => {
      return(
        <App 
            imageSrc = {val.imageSrc} 
            sname = {val.sname}
            location={val.location}
            link = {val.link}
         />
      );
    })}
    {/* <App imageSrc = {Sdata[0].imageSrc} 
    title={Sdata[0].title}
    sname = {Sdata[0].sname}
    link = {Sdata[0].link}
    />
    <App imageSrc = {Sdata[1].imageSrc} 
    title={Sdata[1].title}
    sname = {Sdata[1].sname}
    link = {Sdata[1].link}
    />
    <App imageSrc = {Sdata[2].imageSrc} 
    title={Sdata[2].title}
    sname = {Sdata[2].sname}
    link = {Sdata[2].link}
    />
    <App imageSrc = {Sdata[3].imageSrc} 
    title={Sdata[3].title}
    sname = {Sdata[3].sname}
    link = {Sdata[3].link}
    />
    <App imageSrc = {Sdata[4].imageSrc} 
    title={Sdata[4].title}
    sname = {Sdata[4].sname}
    link = {Sdata[4].link}
    />
    <App imageSrc = {Sdata[5].imageSrc} 
    title={Sdata[5].title}
    sname = {Sdata[5].sname}
    link = {Sdata[5].link}
    />
    <App imageSrc = {Sdata[6].imageSrc} 
    title={Sdata[6].title}
    sname = {Sdata[6].sname}
    link = {Sdata[6].link}
    />  */}
  </section>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

