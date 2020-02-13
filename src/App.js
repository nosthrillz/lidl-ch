import React, { Component } from 'react'
import {descriptions, prices, images, titles, links, titlesEn, descriptionsEn} from './arrays';
import linkIco from './visit_url.png';


const data = (titles,descriptions,images,links,prices,titlesEn,descriptionsEn) => {
    let n = descriptions.length;
    let datas = []
    for (let i=0;i<n;i++) {
        datas.push([titles[i],descriptions[i],images[i],links[i],prices[i],titlesEn[i],descriptionsEn[i]])
    }
    return datas;
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>LIDL CH</h1>
        <p>The table below contains a list of products from LIDL online, Switzerland.</p>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Product (EN)</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
          {
            data(titles,descriptions,images,links,prices,titlesEn,descriptionsEn).map((numList,i) =>(
              <tr key={i}>
                <td><img src={'./images/'+numList[2]} alt='' className='productImage' /></td>
                <td>
                  <p className="productTitle">
                    {numList[0]}
                  </p>
                  <p className="productDescription">
                    {numList[1]}
                  </p>
                </td>
                <td>
                  <p className="productTitle">
                    {numList[5]}
                  </p>
                  <p className="productDescription">
                    {numList[6]}
                  </p>
                </td>
                <td>{numList[4]+' CHF'}</td>
                <td>
                  <a href={numList[3]}>
                    <img src={linkIco} alt='' className="visitUrl"/>
                  </a>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
        <p className="foot">Powered by <a href="https://github.com/nosthrillz">NoSThrillZ</a></p>
      </div>
    )
  }
}

export default App