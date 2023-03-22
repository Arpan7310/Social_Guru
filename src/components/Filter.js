import React from 'react';
import './Filter.css';

const Filter = () => {
  return (
    <div>
      <section id="internships_list_container">

<div class="max-width-container">

    <div class="reference1">

        <div class="reference11"></div>
        
        <div class="reference12">
            <div id="total-internships"></div>
        </div>

    </div>
    
    <div id="reference">
        
        
        <div class="fixed_on_scroll">

            <div id="filters">

                <label class="switch">Include work from home also
                    <input type="checkbox" id="messageCheckbox" value="Yes" onclick="onChecked()" />
                    <span class="slider round"></span>
                </label><br />
                  
                <label class="switch">Part-time
                    <input type="checkbox" id="messageCheckbox" value="parttime" onclick="onChecked()" />
                    <span class="slider round"></span>
                </label><br />
        
                Desired minimum monthly stipend (₹)
                <input type="range" min="0" max="10000" step="2000" id="myRange" value="0" oninput="onChecked()" /><br />
        
                <label class="switch">Internships for women
                    <input type="checkbox" id="messageCheckbox" />
                    <span class="slider round"></span>
                </label><br />
                  
                <label class="switch">Internships with job offer
                    <input type="checkbox" id="messageCheckbox" value="Internship with job offer" onclick="onChecked()" />
                    <span class="slider round"></span>
                </label><br />
                
                <button type="button" onclick="clearFilter()" class="clear_searchBtn">Clear all</button><br />
        
                <input type="text" id="search_id" placeholder="e.g. Design, Mumbai, infosys" class="clear_searchBtn" /><br />
                <button onclick="searchProducts()" class="clear_searchBtn">Search</button>

            </div>

        </div>

       
        <div id="list_container">

            <div id="list_container1"></div>

        </div>

    </div>

</div>
</section>
    </div>
  )
}

export default Filter
