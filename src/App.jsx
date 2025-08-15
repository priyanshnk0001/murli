import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="header flex flex-col items-center  mt-5 bg-image">
        <h1 className='font-bold text-4xl mb-2'>Murli & Son's caterers</h1>
        <div className="logo-container  bg-amber-200">
<img className='w-[130px] h-[100px]' src="./murli.jpeg" alt="" />

        </div>
      </div>


      <div className="table  w-[100%]">
        <table className=' w-[100%] mt-5 '>
          <thead className='bg-amber-200'>
            <tr>
              <th className='border border-black'>सब्जी </th>
              <th className='border border-black'>पंजाबी ढाबा </th>
              <th className='border border-black'>रोटी & तंदूर </th>
              <th className='border border-black'>स्नैक्स </th>
            </tr>
          </thead>
          <tbody>
            <tr className='w-auto px-1'>
            <td>
               <ol className='list-decimal list-inside '>
            
              {/* <li className='border border-black'> */}
                <img className='w-full h-[90px] border-[3px]' src="sabji.jpg" alt="" />
                 {/* </li> */}
              <li className='border border-black'>शाही पनीर </li>
              <li className='border border-black'>मटर  मशरूम </li>
              <li className='border border-black'>मिक्स वेज </li>
              <li className='border border-black'>मलाई कोपता </li>
              <li className='border border-black'>दाल मखनी </li>
              <li className='border border-black'>चाप </li>
              <li className='border border-black'>तवा सब्जी </li>
              <li className='border border-black'>पालक पनीर </li>
              <li className='border border-black'>आलू प्याज </li>
              <li className='border border-black'>कढ़ी पकोड़ा </li>
              <li className='border border-black'>पनीर भुर्जी </li>
              <li className='border border-black'>दम आलू </li>
              <li className='border border-black'>पनीर मखनी </li>
              <li className='border border-black'>नवरत्न कोपता </li>
              <li className='border border-black'>मटर पनीर  </li>
             </ol>
            </td>
           
            <td>
               <ol className='list-decimal list-inside '>
                            <img className='w-full h-[90px] border-[3px]' src="punjabi-dhaba.jpg" alt="" />

              <li className='border border-black'>बैंगन का भरता  </li>
              <li className='border border-black'>दाल फ्राई  </li>
              <li className='border border-black'>भिंडी मसाला </li>
              <li className='border border-black'> राजमा छोले </li>
              <li className='border border-black'> पंचारण चटनी </li>
              <li className='border border-black'>भरमा कुलचे (देसी घी ) </li>
              <li className='border border-black'>------ </li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
             </ol>
            </td>
            <td>
               <ol className='list-decimal list-inside '>
                            <img className='w-full h-[90px] border-[3px]' src="roti.jpg" alt="" />

              <li className='border border-black'>बटर नान  </li>
              <li className='border border-black'>लच्छा पराठा  </li>
              <li className='border border-black'>स्टफ नान </li>
              <li className='border border-black'> मिस्सी रोटी </li>
              <li className='border border-black'> सादा रोटी </li>
              <li className='border border-black'>onion मिस्सी रोटी </li>
              <li className='border border-black'>मक्का की रोटी </li>
              <li className='border border-black'>बथुआ की रोटी </li>
              <li className='border border-black'>ख़स्ता रोटी </li>
              <li className='border border-black'>अजवायन की पूरी </li>
              <li className='border border-black'>भरमा कचौड़ी </li>
              <li className='border border-black'>बिस्किट रोटी </li>
              <li className='border border-black'>------</li>
              <li className='border border-black'>------</li>
              <li className='border border-black'>------ </li>
             </ol>
            </td>
            <td>
               <ol className='list-decimal list-inside '>
                            <img className='w-full h-[90px] border-[3px]' src="snacks.jpg" alt="" />

              <li className='border border-black'>मलाई चाप  </li>
              <li className='border border-black'>पनीर टिक्का </li>
              <li className='border border-black'>मशरूम टिक्का </li>
              <li className='border border-black'>चिल्ली  पनीर </li>
              <li className='border border-black'>मंचूरियन </li>
              <li className='border border-black'>चिल्ली पोटैटो </li>
              <li className='border border-black'>वेज सूप </li>
              <li className='border border-black'>हरा भरा कबाब </li>
              <li className='border border-black'>------ </li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
              <li className='border border-black'>-----</li>
             </ol>
            </td>
           
            </tr>
           
          </tbody>
        </table>
      </div>



    </>
  )
}

export default App
