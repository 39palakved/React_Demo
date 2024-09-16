import React from 'react'
import {useState} from 'react'
import "../css/my.css"
const Toggledarklight = () => {
    const [mode, setMode] = useState("light")
    

   
    
  return (
    <div>
      

<nav class=" border-gray-200 border" id={mode}>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 
  <div class="flex md:order-2  ">
      <button type="button" className='text-lg border p-2'><i class="fa-solid fa-circle-half-stroke mr-1" onClick={()=>{
        setMode((curr)=>(curr==="light"?"dark":"light"))
        
      }} ></i>{mode}</button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
<div>


  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-green-200 p-6 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold mb-4">Weekly Fruit Boxes</h3>
          <p class="mb-4">Get a curated box of fresh fruits delivered to you every week.</p>
          <a href="#" class="text-green-600 hover:underline">Learn More</a>
        </div>
        <div class="bg-orange-200 p-6 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold mb-4">Custom Fruit Baskets</h3>
          <p class="mb-4">Build your own fruit basket with your favorite fruits and surprise someone special.</p>
          <a href="#" class="text-orange-600 hover:underline">Learn More</a>
        </div>
        <div class="bg-red-200 p-6 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold mb-4">Seasonal Fruits</h3>
          <p class="mb-4">Discover and enjoy seasonal fruits that are at their peak of flavor and nutrition.</p>
          <a href="#" class="text-red-600 hover:underline">Learn More</a>
        </div>
      </div>
    </div>
  </section>

</div>
    </div>
  )
}

export default Toggledarklight
