import Vue from 'vue';

const $errorMap = {

};


Vue.use({
    install(Vue) {
        if (Vue.prototype.hasOwnProperty('$errorMap'))
            return;
        Object.defineProperty(Vue.prototype, '$errorMap', {
            get() {
                return $errorMap;
            },
        });
    },
});
