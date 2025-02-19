<script setup>
import { reactive, computed } from "vue";
import Title from '@/components/Title.vue';

const form = reactive({
  area: null,
  description: ""
});

const areas = [
  { id: 1, label: "Matemáticas" },
  { id: 2, label: "Física" },
  { id: 3, label: "Ingeniería" },
  { id: 4, label: "Otro" }
];

const maxWords = 100;
const minWords = 20;

const errors = reactive({
  area: "",
  description: ""
});

const wordCount = computed(() => {
  return form.description.trim() ? form.description.trim().split(/\s+/).length : 0;
});

const isValid = computed(() => {
  return form.area !== null && wordCount.value >= minWords && wordCount.value <= maxWords;
});

const validateDescription = () => {
  if (wordCount.value > maxWords) {
    errors.description = `Máximo ${maxWords} palabras.`;
  } else {
    errors.description = "";
  }
};

const submitForm = () => {
  if (!isValid.value) return;
  alert("Formulario enviado con éxito!");
};
</script>


<template>
  <div class="w-1/2 mx-auto p-6 bg-white shadow-lg rounded-lg shadow-2xl">
    <Title title="prediction" subtitle="Discover your inner scientist" />
    <form @submit.prevent="submitForm" class="space-y-4 my-10 shadow-2xl p-4 border-2 hover:border-red-300 rounded-lg">
      <div>
        <label class="block font-semibold">Área:</label>
        <div class="flex flex-col space-y-2 mt-2">
          <label v-for="option in areas" :key="option.id" class="flex items-center space-x-2">
            <input type="radio" v-model="form.area" :value="option.id" class="form-radio text-blue-500" />
            <span>{{ option.label }}</span>
          </label>
        </div>
        <p v-if="errors.area" class="text-red-500 text-sm">{{ errors.area }}</p>
      </div>

      <div>
        <label class="block font-semibold">Descripción:</label>
        <textarea
          v-model="form.description"
          @input="validateDescription"
          class="w-full border p-2 rounded-md resize-y max-h-40"
          placeholder="Escribe una descripción..."
        ></textarea>
        <p class="text-sm text-gray-500">Máximo {{ maxWords }} palabras ({{ wordCount }} usadas)</p>
        <p v-if="errors.description" class="text-red-500 text-sm">{{ errors.description }}</p>
      </div>

      <button 
        type="submit" 
        :disabled="!isValid"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-md disabled:bg-gray-400">
        Enviar
      </button>
    </form>
  </div>
</template>

<style>
  textarea {
    min-height: 80px;
  }
</style>
