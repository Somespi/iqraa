<script lang='ts'>
  import logo from '../assets/images/logo.png'
</script>

<div class="navbar bg-base-200 fixed z-50 ">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <label tabindex="0" for='' class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href='#/'>Qur'an</a></li>
        <li><a href='#/radio'>Radio</a></li>
      </ul>
    </div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="normal-case text-xl font-bold">
      <img src="{logo}" alt="logo" class="inline mr-1" width="20" height="20"> Iqraa</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href='#/'>Qur'an</a></li>
      <li><a href='#/radio'>Radio</a></li>
    </ul>
  </div>
  <div class="navbar-end">
   
  </div>
</div>
