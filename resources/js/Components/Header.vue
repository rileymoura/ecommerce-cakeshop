<template>
    <div class="navbar bg-secondary">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li><a>Catálogo</a></li>
                    <li>
                        <details>
                        <summary>
                            Sobre nós
                        </summary>
                        <ul class="p-2 bg-base-100">
                            <li><a>Quem somos</a></li>
                            <li><a>Onde estamos</a></li>
                        </ul>
                        </details>
                    </li>
                </ul>
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span class="badge badge-sm indicator-item">{{ items ?? 0 }}</span>
                    </div>
                </label>
                <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div class="card-body">
                        <span class="font-bold text-lg">{{ items ?? 0 }} Items</span>
                        <span>Subtotal: {{ subtotal ?? 0 }}€</span>
                        <div class="card-actions">
                            <button class="btn btn-primary btn-block">Ver carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <font-awesome-icon :icon="'fas fa-user'"/>
                </label>
                <ul v-if='user' tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Perfil
                        </a>
                    </li>
                    <li><a>Definições</a></li>
                    <li><a>Sair</a></li>
                </ul>
                <ul v-else tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Entrar</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default { components: { FontAwesomeIcon } }
</script>
