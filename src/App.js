import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tsPropertySignature } from '@babel/types';

let posts = [
  {
    date: "Jan. 30, 2018",
    title: "Kodak's Dubious Blockchain Gamble",
    description: "What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.",
    author: "By KEVIN ROOSE",
    image: "http://cdn.shopify.com/s/files/1/1704/2353/products/KodakFunsaver_2048x2048_1c97a62d-c904-4c4c-aadd-ff1dcef90ce1_1024x1024.jpg?v=1513804833",
  },

  {
    date: "Jan. 30, 2018",
    title: "Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel",
    description: "Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.",
    author: "By CHRIS HORTON",
    image: "https://tnimage.taiwannews.com.tw/photos/2019/06/19/1560919284-5d09bcf41862f.jpg",
  },
  
  {
    date: "Jan. 29, 2018",
    title: "New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon",
    description: "Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.",
    author: "By BRAD PLUMER",
    image: "https://www.inquirer.com/resizer/tbfyVOC9dhNarmKxx8Y-DOAagC4=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/G6FVJEBBR5CZVFISL2HF4SEA3M.jpg",
  },

]

function Post(props) {
  return (
    <div class="listing">
        <div className="date">{props.date}</div>
      <div class="content">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <div className="author">{props.author}</div>
      </div>
      <div className="image">
        <img src={props.image} alt="a kodak camera" />
      </div>
    </div>
    )
}

function App() {
  return (
    <div>
      <Post date={posts[0].date} title={posts[0].title} description={posts[0].description} author={posts[0].author} image={posts[0].image}/>
      <Post date={posts[1].date} title={posts[1].title} description={posts[1].description} author={posts[1].author} image={posts[1].image}/>
      <Post date={posts[2].date} title={posts[2].title} description={posts[2].description} author={posts[2].author} image={posts[2].image}/>
    </div>
  );
}

export default App;
