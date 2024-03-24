import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App"> 

      {/* header: nav bar + tag buttons */}
      <header>
        <nav class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div className="logo"><img style={{ display:'flex', left: 0, width: '75px', height: '75px', lineHeight: '75px' }} src="https://cdn.discordapp.com/attachments/1207354918667690064/1221268277272121384/Untitled_Artwork_16.png?ex=6611f5b7&is=65ff80b7&hm=2494a663e69a4756908b838250368cbf5e093047388f024636c25ebcec714c2a&" alt="Logo" /></div>
          <div className="right-0 hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
              <li><a href="#" className="block py-2 px-3 text-white bg-#f8fafc md:bg-transparent md:text-blue-700 md:p-0 dark:" aria-current="page">Create a Post</a></li>
              <li><a href="#" className="block py-2 px-3 text-white bg-#f8fafc md:bg-transparent md:text-blue-700 md:p-0 dark:" aria-current="page">Profile</a></li>
              <li><a href="#" className="block py-2 px-3 text-white bg-#f8fafc md:bg-transparent md:text-blue-700 md:p-0 dark:" aria-current="page">Settings</a></li>
              <li><a href="#" className="block py-2 px-3 text-white bg-#f8fafc md:bg-transparent md:text-blue-700 md:p-0 dark:" aria-current="page">Log Out</a></li>
            </ul>
          </div>
        </nav>
        {/* tag buttons */}
          <div class="w-full mx-auto max-w-screen-xl pl-4 md:flex md:items-left">
            <h1 class="ml-4 mb-0 text-xl font-bold"> Tags </h1>
          </div>
        <div class="w-full mx-auto max-w-screen-xl pl-4 pt-2 md:flex md:items-left">
          <div>
            <button id="toggle-cafswipe" class="bg-green-500 ml-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Caf Swipe
            </button>
            <button id="toggle-free" class="bg-orange-500 ml-2 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Free
            </button>
            <button id="toggle-mealshare" class="bg-blue-500 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Meal Share
            </button>
          </div>
          </div>
      </header>

      {/* postings */}

      <div className="w-full mx-auto space-y-8 space-x-8 max-w-screen-xl p-4 flex flex justify-left items-left z-50 outline-none focus:outline-none">
        {/* post 1 */}
        <div id="post-cafswipe" className="block rounded-lg bg-white border-light-grey border-2 w-72 mt-8">
          <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
            <img className="sm:m-h-64 md:h-64 w-full" src="https://charlatan.ca/wp-content/uploads/2020/10/DSCF4896.jpg" alt="food" />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-2">
            <div className="flex justify-between">
              <h5 className="bg-green-500 p-1 mb-2 text-sm font-bold leading-tight text-white rounded dark:">
                Caf Swipe
              </h5>
              <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark: flex">
                On Campus 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              </h5>
            </div>
            <p className="mb-1 text-sm text-neutral-400 dark:">
              Added 2 days ago
            </p>
            <p className="mb-1 text-sm text-neutral-600 dark:">
              "I have 3 extra meal swipes, I'd love to make a new friend on campus - let's grab a meal :)" - Jane Smith
            </p>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 text-sm font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              View more
            </button>
          </div>
        </div>
        {/* post 2 */}
        <div id="post-free" className="block rounded-lg bg-white border-light-grey border-2 w-72">
          <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
            <img className="sm:m-h-64 md:h-64 w-full" src="https://i.pinimg.com/originals/81/8f/12/818f12f631e33178f0001acf444a175a.jpg" alt="food" />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>

          <div className="p-2">
            <div className="flex justify-between">
              <h5 className="bg-orange-500 p-1 mb-2 text-sm font-bold leading-tight text-white rounded dark:">
                Free
              </h5>
              <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark: flex">
                On Campus 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              </h5>
            </div>

            <p className="mb-1 text-sm text-neutral-400 dark:">
              Added 4 days ago
            </p>
            <p className="mb-1 text-sm text-neutral-600 dark:">
              "I have extra produce from my garden (carrots, green onions, & more) I'd like to give away. Pick up at the canal building!" - John Smith
            </p>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 text-sm font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              View more
            </button>
          </div>
        </div>
        {/* post 3 */}
        <div id="post-share" className="block rounded-lg bg-white border-light-grey border-2 w-72">
          <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
            <img className="sm:m-h-64 md:h-64 w-full" src="https://charlatan.ca/wp-content/uploads/2017/09/nFoodCourt7_MeaganCasalino_WEB.jpg" alt="food" />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-2">
            <div className="flex justify-between">
              <h5 className="bg-blue-500 p-1 mb-2 text-sm font-bold leading-tight text-white rounded dark:">
                Meal Share
              </h5>
              <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark: flex">
                On Campus 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              </h5>
            </div>

            <p className="mb-1 text-sm text-neutral-400 dark:">
              Added 3 days ago
            </p>
            <p className="mb-1 text-sm text-neutral-600 dark:">
              "Anyone wanna grab a burg? Fries, maybe?" - Jake Smith
            </p>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 text-sm font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              View more
            </button>
          </div>
        </div>
        </div>
          
          {/* posting button */}
          
          <div class="fixed bottom-0 right-0 w-16 h-16 mr-12 mb-8 cursor-pointer" id="box_btn">
            <a href="#"><img class="size-10" src="https://cdn.discordapp.com/attachments/1207354918667690064/1221268276571799662/image.png?ex=6611f5b7&is=65ff80b7&hm=37ba5cac03e8ebb499848bdc49ff52b647eea105336cd1e9d4edd30bfa4c2200&"></img></a> 
          </div>

          {/* footer */}
          <footer className="fixed bottom-0 w-full shadow-md z-50">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://hungryhomies.club/" class="hover:underline">HungryHomies</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>
    </div>
  )
}

export default App;

