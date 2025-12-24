<script setup>
import axios from "axios";

const getPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

const { isPending, isError, data, error } = useQuery({
  queryKey: ["posts"],
  queryFn: getPosts,
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="flex items-center gap-3 mb-6">
        <Icon
          name="mdi:file-document-outline"
          size="28"
          class="text-blue-600"
        />
        <h1 class="text-2xl font-bold text-gray-800">Posts</h1>
      </div>

      <!-- Loading -->
      <div v-if="isPending" class="flex justify-center items-center py-20">
        <div class="flex flex-col items-center gap-3 text-gray-600">
          <Icon
            name="mdi:loading"
            size="32"
            class="animate-spin text-blue-500"
          />
          <span>Loading posts...</span>
        </div>
      </div>

      <!-- Error -->
      <div
        v-else-if="isError"
        class="flex items-center gap-2 bg-red-100 border border-red-300 text-red-700 p-4 rounded-md"
      >
        <Icon name="mdi:alert-circle-outline" size="22" />
        <span>{{ error?.message || "Something went wrong" }}</span>
      </div>

      <!-- Data -->
      <div v-else class="grid gap-4 sm:grid-cols-2">
        <div
          v-for="post in data"
          :key="post.id"
          class="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
        >
          <div class="flex items-start gap-2 mb-2">
            <Icon
              name="mdi:text-box-outline"
              size="20"
              class="text-gray-400 mt-1"
            />
            <h2 class="font-semibold text-gray-800 line-clamp-1">
              {{ post.title }}
            </h2>
          </div>

          <p class="text-sm text-gray-600 line-clamp-3">
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
