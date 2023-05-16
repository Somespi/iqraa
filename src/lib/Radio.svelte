<script>
    import img from '../assets/images/hero.jpg'
    import img2 from '../assets/images/hero2.jpg'
    import {play, players} from '../App.svelte'
</script>
<main>
<div class=" pt-60 lg:pt-0">

    <div class="flex flex-col lg:flex-row items-center justify-center w-screen h-screen m">
        <div class="grid gap-4 ">
                <div class="card max-w-md text-white bg-zinc-900 mx-5">
                    <figure><img src="{img}" alt="Mishary Al-Afasy reciting the Holy Quran" /></figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">The Holy Quran - Mishari Al-Afasi</h2>
                        <div class="card-body">
                            <div class="btn-group-horizontal">
                                <button class="btn btn-primary" on:click={() => play('https://qurango.net/radio/mishary_alafasi')}>Play</button>
                                <button class="btn btn-primary btn-outline" on:click={() => players.forEach(i => i.pause())}>Pause</button>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div> 
            <br><br>
                <div class="card max-w-md text-white bg-zinc-900 mx-5">
                    <figure><img src="{img2}" alt="Maher Al-Mueaqly reciting the Holy Quran " /></figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">The Holy Quran - Maher Al-Mueaqly</h2>
                        <div class="card-body">
                            <div class="btn-group-horizontal">
                                <button class="btn btn-primary" on:click={() => play('https://qurango.net/radio/maher_AlMueaqly')}>Play</button>
                                <button class="btn btn-primary btn-outline" on:click={() => players.forEach(i => i.pause())}>Pause</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
</div>
</main>