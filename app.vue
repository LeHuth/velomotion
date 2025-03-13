<template>
  <div class="app">
    <UNotifications />
    <div id="input-container">
      <UButton @click="logTimestamp('green')" size="md" block color="primary" label="Greenlight">
        Greenlight
      </UButton>
      <UButton @click="logTimestamp('yellow')" size="md" block color="yellow" label="Yellow">
        Yellow
      </UButton>
      <UButton @click="logTimestamp('red')" size="md" block color="red" label="Red">
        Red
      </UButton>
    </div>
    <div id="display-container">
      <UButton block label="Open" @click="isOpen = true" />
      <USlideover side="bottom" v-model="isOpen">
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
        <UTable :sort="sort" :columns="columns" :rows="computedRows"/>
      </USlideover>
    </div>
  </div>
</template>

<script setup lang="ts">
const toast = useToast()
const isOpen = ref(false)
interface LogEntry {
  timestamp: number
  value: string
  trafficLightId: number
}

const sort = ref({
  column: 'timestamp',
  direction: 'desc' as const
})

const columns = [
  {
    key: 'timestamp',
    label: 'Timestamp',
    sortable: true,
    direction: 'desc' as const,
  },
  {
    key: 'value',
    label: 'Value',
  },
  {
    key: 'trafficLightId',
    label: 'TrafficLightId',
  }
]



const data = ref({
  log:[] as LogEntry[],
})

const computedRows = computed(()=>{
  return data.value.log.map((logEntry) => {
    return {
      ...logEntry,
      timestamp: new Date(logEntry.timestamp).toLocaleString()
    }
  })
})
const currentTrafficLight = ref(0)
const start = new Date();
const logTimestamp = (value:string) => {
  data.value.log.push({
    timestamp:Date.now(),
    value:value,
    trafficLightId:currentTrafficLight.value
  });
  toast.add({ title: `Logged ${value} light` })
};


const logYellow = () => {
  console.log("Yellow Timestamp:", Date.now());
};

const logRed = () => {
  console.log("Red Timestamp:", Date.now());
};


</script>

<style scoped>
button {
  min-width: 150px;
  margin-bottom: 32px;
}
#input-container {
  max-width: 500px;
}
</style>
