import React from 'react'
import "./utilities.css"
export default function Utilities() {
    return (
        <div id='utility-wrap'>
            <div id='uti-date'><input type="date" name="select-date" id="select-date" /></div>
            <div className="button-style" id='filter-wrap'><img src="/filter.png" alt="filter" id='filter-img' /><span>Filters</span><select name="" id="filter-select" >
                <option value="filter"></option>
                <option value="filter">Aplhabetically</option>
            </select></div>
            <div className='button-style'>
                <img src="/delete.png" alt="delete" /><button>Delete</button>
            </div>
            <div className='button-style'>
                <img id='export-img' src="/import.png" alt="import" /><button>Import</button>
            </div>
            <div id='uti-export' className='button-style'>
                <img src="/export.png" alt="export" />  <button>Export</button>
            </div>
        </div>
    )
}
