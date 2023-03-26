const userEl = document.querySelector('#user')
const generateBtn = document.querySelector('#generate')
const body =document.querySelector('body')
const spinner = document.querySelector('.spinner')

function getUser() {
  spinner.classList.remove('hidden')
  fetch('https://randomuser.me/api/')
   .then((response)=>response.json())
   .then((data)=>data.results[0])
   .then((user)=>displayUser(user))
}

function displayUser(user){
    console.log(user)

    html = ` <div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src=${user.picture.large}
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first} ${user.name.last} 
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location.city}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
      </div>
    </div>
  </div>
</div>`
   userEl.innerHTML=html
   changeColour(`${user.gender}`)
   spinner.classList.add('hidden')

}

function changeColour(gender){
    if(gender==='male'){
        body.classList.replace('bg-purple-800','bg-cyan-800')
    }else{
        body.classList.replace('bg-cyan-800','bg-purple-800')
    }
}

generateBtn.addEventListener('click',getUser)