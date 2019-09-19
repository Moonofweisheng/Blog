<template >
</template>

<script>
import L2Dwidget from "live2d-widget";
export default {
    name: "live2D",
    created() {
        L2Dwidget.L2Dwidget.init({
            model: {
                jsonPath: "/tororo/assets/tororo.model.json"
            },
            display: {
                superSample: 2,
                width: 150,
                height: 150,
                position: "right",
                hOffset: 0,
                vOffset: 0
            },
            mobile: {
                show: true,
                scale: 1,
                motion: true
            },
            react: {
                opacityDefault: 0.8,
                opacityOnHover: 0.2
            }
        });
    }
};
</script>