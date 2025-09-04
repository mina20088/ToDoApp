<template>
    <div class="progress">
        <div class="bar" ref="prog">
            <span class="progress-label">{{ props.progress }}%</span>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, useTemplateRef, watchEffect } from 'vue'

    const props = defineProps({
        progress: {
            type: Number,
            default: 0,
        },
    })

    const progressTemplateRef = useTemplateRef('prog')

    onMounted(() => {
        watchEffect(() => {
            progressTemplateRef.value.style.width = props.progress + '%'
            progressTemplateRef.value.style.right = `'${props.progress}%'`
        })
    })
</script>

<style scoped>
    .progress {
        height: 15px;
        background-color: oklch(96.8% 0.007 247.896);
        border-radius: 5px;
    }
    .bar {
        display: flex;
        flex-direction: column-reverse;
        height: 15px;
        background-image: linear-gradient(
            90deg,
            rgba(81, 162, 255, 1) 0%,
            rgba(43, 127, 255, 1) 60%
        );
        border-radius: 5px;
    }
    .progress-label {
        font-size: 12px;
        color: white;
        text-align: center;
    }
</style>
