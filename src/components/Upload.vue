<script lang='ts' setup>
defineProps<{ icon?: string; multiple?: boolean; accept?: "image/*" | "video/*" }>()
const emit = defineEmits(['finish'])
const fileInput = ref<HTMLElement>();
const fileList = ref<File[]>();

function onChange(event: any) {
  const files = event.target.files as File[]
  fileList.value = files
  for (let file of files) {
    console.log(file);
    const { name } = file
    // const blobStr = URL.createObjectURL(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadstart = (e) => {
      console.log(e);
    }
    reader.onprogress = (e) => {
      console.log(e.loaded / e.total)
    }
    reader.onabort = (e) => {
      console.log(e);
    };
    reader.onerror = (e) => {
      console.error(e);
    }
    reader.onload = (e) => {
      console.log(e);
    };
    reader.onloadend = (e) => {
      emit('finish', { src: e.target?.result, alt: name, title: name, caption: '222' });
    };
  }
}

function onValid(event: any) {
  console.log(event);

}
</script>

<template>
  <i @click="fileInput?.click();" :class="icon || 'i-icon-park-outline:upload'"></i>
  <input ref="fileInput" hidden type="file" @invalid="onValid" @change="onChange" :multiple="multiple"
    :accept="accept || '*'" />
  <!-- <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" style="max-width: 200px; max-height: 200px;" /> -->
</template>

<style scoped lang='scss'></style>