<script setup lang="ts">
import { GoogleMap, CustomMarker } from 'vue3-google-map'
import { defineAsyncComponent } from 'vue'

const logo200fuchsia = defineAsyncComponent(() => import('@/assets/logo200fuchsia.svg'))

//Your location
const center = { lat: 59.40989085951935, lng: 24.643809184746956 }

//Your Google API key
const key = import.meta.env.VITE_GOOGLE_API_KEY

// Feature and Element types
// https://developers.google.com/maps/documentation/javascript/style-reference
const custom = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      {
        saturation: -70
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        hue: '#ff0000'
      }
    ]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'fill',
    stylers: [
      {
        color: '#f9a8d4'
      }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'fill',
    stylers: [
      {
        color: '#fce7f3'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f472b6'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f472b6'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#d946ef'
      }
    ]
  },
  {
    featureType: 'poi.sports_complex',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f472b6'
      }
    ]
  }
]

//Function to alert address and contacts
const alertAddress = () => {
  alert(
    `Oleg Rõbnikov Web Development

      Address:
      Õismäe tee 65-47
      13515 Tallinn
      Estonia

      Contacts:
      Tel: +372 5604 5484
      Email: oleg@rybnikov.online`
  )
}
</script>

<template>
  <GoogleMap
    :api-key="key"
    :styles="custom"
    style="width: 80%; height: 80vw"
    class="mx-auto border-4 border-fuchsia-700 rounded mb-12"
    :center="center"
    :zoom="15"
  >
    <CustomMarker @click="alertAddress" :options="{ position: center, anchorPoint: 'TOP_CENTER' }">
      <logo200fuchsia width="150" height="50" alt="Oleg Rõbnikov Web Development" />
    </CustomMarker>
  </GoogleMap>
</template>
