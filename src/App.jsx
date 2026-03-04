import { menuData } from './data/menuData'
import './App.css'

function App({ selectedItems, onToggleItem }) {
  return (
    <>
      <div className="text-center flex flex-col  w-[100%] h-[180px] border-2 bg-amber-100 border-amber-700 header ">
        <p className='flex justify-between mx-3 text-2xl text-amber-700'><span>RajKumar</span> <span>9911907021</span></p>
        <figure className='w-[100%] text-center flex justify-center '>
          <h1>Murli & Son's caterers</h1>
          <h1>Murli & Son's caterers</h1>
          <h1>Murli & Son's caterers</h1>
          <h1>Murli & Son's caterers</h1>
          <h1>Murli & Son's caterers</h1>
          <h1>Murli & Son's caterers</h1>
          <h1>Murli & Son's caterers</h1>
          <h1>Murli & Son's caterers</h1>
          <h1>Murli & Son's caterers</h1>
          <h1>Murli & Son's caterers</h1>
        </figure>
      </div>

      <div className="table  w-[100%]">
        <table className=' w-[100%] mt-2 '>
          <thead className='bg-amber-200'>
            <tr>
              {menuData.section1.map((col, idx) => (
                <th key={idx} className='border border-black'>{col.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className='w-auto px-1'>
              {menuData.section1.map((col, idx) => (
                <td key={idx} className="align-top">
                  <ol className='list-decimal list-inside '>
                    <img className='w-full object-cover h-[90px] border-[3px]' src={col.image} />
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
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
