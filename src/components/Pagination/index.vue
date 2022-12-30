<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination :background="background" :small="small" v-model:current-page="limit" v-model:page-size="page"
      :layout="layout" :page-sizes="pageSizes" :pager-count="pagerCount" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  total: number,          // 总条目数
  currentPage: number,    // 当前页数
  pageSize: number,       // 每页显示条目个数
  pageSizes?: number[],   // 每页显示个数选择器的选项设置
  pagerCount?: number,    // 设置最大页码按钮数 (5 ≤ x ≤ 21 的奇数)
  layout?: string,        // 组件布局
  background?: boolean,   // 是否为分页按钮添加背景色
  small?: boolean,        // 是否开启小型分页
  hidden?: boolean,       // 是否隐藏分页
}>(), {
  currentPage: 1,
  pageSize: 10,
  pageSizes: () => [10, 20, 30, 50, 100],
  pagerCount: document.body.clientWidth < 992 ? 5 : 7,
  layout: "total, sizes, prev, pager, next, jumper",
  background: true,
  hidden: false,
  small: false,
})

const emit = defineEmits<{
  (e: "update:currentPage", val: number): void;
  (e: "update:pageSize", val: number): void;
  (e: "pagination", val: { currentPage: number, pageSize: number }): void;
}>();

const limit = computed({
  get() {
    return props.currentPage;
  },
  set(val) {
    emit("update:currentPage", val);
  },
});
const page = computed({
  get() {
    return props.pageSize;
  },
  set(val) {
    emit("update:pageSize", val);
  },
});
const handleSizeChange = (val: number) => {
  if (limit.value * val > props.total) {
    limit.value = 1;
  }
  emit("pagination", { currentPage: limit.value, pageSize: val });
};
const handleCurrentChange = (val: number) => {
  emit("pagination", { currentPage: val, pageSize: page.value });
};
</script>

<style scoped>
.pagination-container {
  background: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
}

.pagination-container.hidden {
  display: none;
}
</style>
