<template>
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
        <div class="max-w-6xl mx-auto">
            <header>
                <h1 class="text-4xl font-bold leading-tight text-gray-900">
                    {{ $route.name}}
                </h1>
            </header>
            <main>
                <div class="px-4 py-8 sm:px-0">
                    <div class="border border-8 border-gray-200 rounded-lg bg-white">
                        <div class="p-5">
                            <router-view />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
