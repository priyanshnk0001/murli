import { menuData } from '../data/menuData'
import './third.css'

function third({ selectedItems, onToggleItem }) {
    return (
        <>
            <div className="table  w-[100%]">
                <table className=' w-[100%] mt-5 '>
                    <thead className='bg-amber-200'>
                        <tr>
                            {menuData.section3.map((col, idx) => (
                                <th key={idx} className='border border-black'>{col.title}</th>
                            ))}
                            <th className='border border-black'>______</th>
                            <th className='border border-black'>______</th>
                            <th className='border border-black'>______</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='w-auto px-1'>
                            {menuData.section3.map((col, idx) => (
                                <td key={idx} className="align-top">
                                    <ol className='list-decimal list-inside '>
                                        <img className='w-full h-[90px] border-[3px]' src={col.image} alt="" />
                                        {col.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className='border border-black flex items-center px-2 py-1 gap-2'>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedItems.includes(item)}
                                                    onChange={() => onToggleItem(item)}
                                                    className="w-4 h-4 cursor-pointer"
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </td>
                            ))}
                            {[1, 2, 3].map(i => (
                                <td key={i} className="align-top">
                                    <ol className='list-decimal list-inside '>
                                        {Array(21).fill(0).map((_, idx) => (
                                            <li key={idx} className='border border-black'>------</li>
                                        ))}
                                    </ol>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default third

