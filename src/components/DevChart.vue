<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'DevChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Git', 'GitHub', 'Firebase',],
        datasets: [
          {
            label: 'DevOps',
            data: [30, 45, 40, 20],
            backgroundColor: [
              'rgba(87, 16, 131, 0.25)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options:{
	scale:{
		ticks:{
			beginAtZero:true,
			max:50,
			min:0
		}
	}
}
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>