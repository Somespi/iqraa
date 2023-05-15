<script >

  import Home from "./lib/Homepage.svelte"
  import Radio from "./lib/Radio.svelte"
  import Quran from "./lib/Quran.svelte"
  import Router from 'svelte-spa-router'
  import Navbar from "./lib/Navbar.svelte";
  let routes = {
    "/": Home , 
    "/quran/:id": Quran, 
    "/radio": Radio, 

  }


  
</script>

<script context='module'>
export const players = new Set()

export const play = (sound) => {
  players.forEach(i => i.pause())
  const sound_ = new Audio(sound)
  players.add(sound_)
  sound_.play()
}
</script>

<Navbar/>
<main>
  <Router {routes} />
</main>
