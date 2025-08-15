import { useState } from 'react'
import './second.css'

function second() {


    return (
        <>


            <div className="table  w-[100%]">
                <table className=' w-[100%] mt-5 '>
                    <thead className='bg-amber-200'>
                        <tr>
                            <th className='border border-black'>नासता </th>
                            <th className='border border-black'>खोमचा चटपटा </th>
                            <th className='border border-black'>स्वीट्स  </th>
                            <th className='border border-black'>भाजी डिब्बा </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='w-auto px-1'>
                            <td>
                                <ol className='list-decimal list-inside '>
                                    <img className='w-full h-[90px] border-[3px]' src="nasta.jpg" alt="" />

                                    <li className='border border-black'>सादा बर्फी </li>
                                    <li className='border border-black'>मिल्क केक </li>
                                    <li className='border border-black'>चमचम </li>
                                    <li className='border border-black'>काजू बर्फी </li>
                                    <li className='border border-black'>शाही बर्फी </li>
                                    <li className='border border-black'>केसर दूध </li>
                                    <li className='border border-black'>पनीर की जलेबी </li>
                                    <li className='border border-black'>काजू </li>
                                    <li className='border border-black'>बादाम </li>
                                    <li className='border border-black'>किसमिस </li>
                                    <li className='border border-black'>रोस्टेड पिस्ता  </li>
                                    <li className='border border-black'>पनीर पकौड़ा </li>
                                    <li className='border border-black'>पंजाबी पकौड़ा </li>
                                    <li className='border border-black'>गोभी पकोड़ा </li>
                                    <li className='border border-black'>मिर्च का पकौड़ा </li>
                                    <li className='border border-black'>🍎 सेब </li>
                                    <li className='border border-black'>🍊 संतरा </li>
                                    <li className='border border-black'> तरबूज </li>
                                    <li className='border border-black'>🍇 अंगूर </li>
                                    <li className='border border-black'>अमरूद </li>
                                    <li className='border border-black'>🍌 केला  </li>
                                </ol>
                            </td>

                            <td>
                                <ol className='list-decimal list-inside '>
                                    <img className='w-full h-[90px] border-[3px]' src="khomcha.jpg" alt="" />

                                    <li className='border border-black'>गोल गप्पे </li>
                                    <li className='border border-black'>टिक्की  </li>
                                    <li className='border border-black'>चौमीन </li>
                                    <li className='border border-black'>दही भल्ले </li>
                                    <li className='border border-black'>कांजी के बड़े  </li>
                                    <li className='border border-black'>चीला </li>
                                    <li className='border border-black'>फ्रूट चाट  </li>
                                    <li className='border border-black'>पाव भाजी </li>
                                    <li className='border border-black'>ढोसा </li>
                                    <li className='border border-black'>इंग्लिश चाट </li>
                                    <li className='border border-black'>-----</li>
                                    <li className='border border-black'>-----</li>
                                    <li className='border border-black'>-----</li>
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
                                    <img className='w-full h-[90px] border-[3px]' src="sweets.jpg" alt="" />

                                    <li className='border border-black'>गुलाब जामुन </li>
                                    <li className='border border-black'>रस मलाई  </li>
                                    <li className='border border-black'>गाजर का हलवा </li>
                                    <li className='border border-black'> मूंग का हलवा  </li>
                                    <li className='border border-black'>घीया का हलवा  </li>
                                    <li className='border border-black'>राज भोग </li>
                                    <li className='border border-black'>स्पंज रसगुल्ले  </li>
                                    <li className='border border-black'>राज भोग केसर </li>
                                    <li className='border border-black'>पनीर की जलेबी </li>
                                    <li className='border border-black'>लंबे गुलाब जामुन </li>
                                    <li className='border border-black'>सफेद रसगुल्ले </li>
                                    <li className='border border-black'>दूध जलेबी  </li>
                                    <li className='border border-black'>------</li>
                                    <li className='border border-black'>------</li>
                                    <li className='border border-black'>------ </li>
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
                                    <img className='w-full h-[90px] border-[3px]' src="bhaji-dibba.jpg" alt="" />

                                    <li className='border border-black'>सादा बर्फी </li>
                                    <li className='border border-black'>डोडा बर्फी </li>
                                    <li className='border border-black'>मिल्क केक </li>
                                    <li className='border border-black'>बेसन के लड्डू </li>
                                    <li className='border border-black'>शाही पतीसा </li>
                                    <li className='border border-black'>------</li>
                                    <li className='border border-black'>------</li>
                                    <li className='border border-black'>------</li>
                                    <li className='border border-black'>------ </li>
                                    <li className='border border-black'>-----</li>
                                    <li className='border border-black'>-----</li>
                                    <li className='border border-black'>-----</li>
                                    <li className='border border-black'>-----</li>
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

                        </tr>

                    </tbody>
                </table>
            </div>



        </>
    )
}

export default second
