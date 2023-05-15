<script>
    import img from '../assets/images/hero.jpg'
    import {play, players} from '../App.svelte'
</script>

<div class="flex flex-col items-center justify-center w-screen h-screen">
    <div class="card max-w-md text-white bg-zinc-900">
        <figure><img src="{img}" alt="Mishary Al-Afasy reciting the Holy Quran" /></figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">The Holy Quran - Mishary Al-Afasy</h2>
            <div class="card-body">
                <div class="btn-group-horizontal">
                    <button class="btn btn-primary" on:click={() => play('https://qurango.net/radio/mishary_alafasi')}>Play</button>
                    <button class="btn btn-primary btn-outline" on:click={() => players.forEach(i => i.pause())}>Pause</button>
                </div>
            </div>
        </div>
    </div>
</div>