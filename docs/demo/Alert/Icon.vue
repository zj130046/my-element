<script setup lang="ts">
import ElAlert from '@/components/Alert/Alert.vue'
</script>

<template>
  <el-alert title="success alert" type="success" showIcon />
  <el-alert title="info alert" type="info" showIcon />
  <el-alert title="warning alert" type="warning" showIcon />
  <el-alert title="error alert" type="error" showIcon />
</template>