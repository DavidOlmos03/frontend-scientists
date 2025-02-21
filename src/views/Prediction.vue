<script setup>
import { reactive, computed } from "vue";
import Title from '@/components/Title.vue';

import { usePredictionStore } from "../stores/prediction";

const predictionStore = usePredictionStore();
const submit = async () => {
  predictionStore.fetchPrediction(form.area, form.description);
};

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
    errors.description = `Max ${maxWords} words.`;
  } else {
    errors.description = "";
  }
};

const submitForm = () => {
  if (!isValid.value) return;
  alert("Form submitted!");
  submit();
};
</script>


<template>
  <div class="w-1/2 mx-auto p-6 bg-white shadow-lg rounded-lg shadow-2xl pb-10">
    <Title title="prediction" subtitle="Discover your inner scientist" />
    <form @submit.prevent="submitForm" class="space-y-4 mt-10 shadow-2xl p-4 border-2 hover:border-red-300 rounded-lg">
      <div>
        <label class="block font-semibold">Area:</label>
        <div class="flex flex-col space-y-2 mt-2">
          <label v-for="option in areas" :key="option.id" class="flex items-center space-x-2">
            <input type="radio" v-model="form.area" :value="option.id" class="form-radio text-blue-500" />
            <span>{{ option.label }}</span>
          </label>
        </div>
        <p v-if="errors.area" class="text-red-500 text-sm">{{ errors.area }}</p>
      </div>

      <div>
        <label class="block font-semibold">Description:</label>
        <textarea
          v-model="form.description"
          @input="validateDescription"
          class="w-full border p-2 rounded-md resize-y max-h-40"
          placeholder="Write a description ..."
        ></textarea>
        <p class="text-sm text-gray-500">Max {{ maxWords }} words ({{ wordCount }} used)</p>
        <p v-if="errors.description" class="text-red-500 text-sm">{{ errors.description }}</p>
      </div>

      <button 
        type="submit"
        :disabled="!isValid"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-md disabled:bg-gray-400">
        Send
      </button>
    </form>
  </div>
  <div v-if="predictionStore.prediction.prediction" class="w-1/2 mx-auto p-6 bg-white shadow-lg rounded-lg shadow-2xl mt-2">
    <div  class="space-y-4 my-10 shadow-2xl p-4 border-2 rounded-lg">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold text-lg">
          Scientist Name
        </h3>
        <h3 class="font-semibold text-lg">
          Score
        </h3>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-sm">
          {{ predictionStore.prediction.prediction }}
        </p>
        <p class="text-sm">
          {{ predictionStore.prediction.score }}%
        </p>
      </div>
      <p class="text-sm text-gray-500 text-center">
        This is the prediction of the AI model.
      </p>
    </div>
  </div>
  <div v-else>
    <p v-if="!submitForm" class="text-sm text-gray-500 text-center">
      Loading...
    </p>
  </div>
</template>

<style>
  textarea {
    min-height: 80px;
  }
</style>
