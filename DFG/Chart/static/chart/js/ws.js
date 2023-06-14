var graphData = {
    type: 'line',
    data: {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(73, 198, 230, 0.5)'
            ]
        }]
    },
    options: {}
}

var ctx = document.getElementById('myChart').getContext('2d')
var myChart = new Chart(ctx, graphData)

const ws = new WebSocket("ws://localhost:8000/ws/chart/");

ws.onmessage = function(event){
    data = JSON.parse(event.data)
    console.log(data)

    var newGraphData = graphData.data.datasets[0].data
    newGraphData.shift()
    newGraphData.push(data.value)

    graphData.data.datasets[0].data = newGraphData
    myChart.update()
}