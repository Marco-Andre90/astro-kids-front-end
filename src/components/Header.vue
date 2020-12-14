<template>
    <v-app-bar
            app
            class="darken-4">
            
        <div class="d-flex align-center">
            <v-toolbar-title class="headline purple--text text-uppercase mr-4">
                <router-link to="/" tag="span" style="cursor:pointer">
                    <span style="font-weight: 800;">Astro Kids</span>
                </router-link>
            </v-toolbar-title>
        </div>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn 
                text
                to="/familia"
                style="color:#4361EE">
                    Responsáveis
                    <v-icon class="ml-2">fas fa-users</v-icon>
             </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>