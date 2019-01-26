import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;

export default {
    extends: Line,
    props: ['options'],
    mixins: [ reactiveProp ],
    data () {
        return {
        }
    },
    mounted () {

        // this.renderChart({
        //     labels: this.options,
        //     datasets: [
        //         {
        //             label: 'Курс',
        //             borderColor: '#ff0000',
        //             pointBackgroundColor: 'black',
        //             borderWidth: 1,
        //             pointBorderColor: 'white',
        //             backgroundColor: this.gradient,
        //             data: this.chartData,
        //         }
        //     ]
        // }, {responsive: true, maintainAspectRatio: false})
        this.renderChart({labels: this.options, datasets: this.chartData}, {responsive: true, maintainAspectRatio: false});
    },
}
